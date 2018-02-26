module.exports = {

  before: config => {
    const { Action, Form, listen, clearHandlers } = require('sharp-pad-forms')
    global._clearHandlers = clearHandlers
    global.Action = Action
    global.Form = Form
    global._listen = listen
  },

  beforeEach: config => {
    global._clearHandlers()
  }

}
