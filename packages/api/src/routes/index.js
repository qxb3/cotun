const create = require('./create')
const counter = require('./counter')

module.exports = (app, _options, done) => {
  app.register(create)
  app.register(counter)

  done()
}
