module.exports = {

  before: config => {
    const getPort = require('get-port')
    const { Action, Form, listen, clearHandlers } = require('sharp-pad-forms')
    let port = 5256
    if (config && config['sharp-pad-forms'] && config['sharp-pad-forms'].port) {
      port = config['sharp-pad-forms'].port
    }

    getPort({ port })
      .then(newPort => {
        global.clearHandlers = clearHandlers
        global.Action = Action
        global.Form = Form
        listen(newPort)
      })
      .catch(err => {
        console.error(err)
      })
  },

  beforeEach: config => {
    global.clearHandlers()
  }

}
