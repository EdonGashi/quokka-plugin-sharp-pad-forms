module.exports = {

  before: config => {
    const { Action, Form, listen, clearHandlers } = require('sharp-pad-forms')
    let port = 5256
    if (config && config['sharp-pad-forms'] && config['sharp-pad-forms'].port) {
      port = config['sharp-pad-forms'].port
    }

    this.clearHandlers = clearHandlers
    global.Action = Action
    global.Form = Form
    listen(port)
  },

  beforeEach: config => {
    this.clearHandlers()
  }

}
