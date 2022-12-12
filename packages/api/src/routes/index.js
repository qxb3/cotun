const count = require('#routes/count.js')

module.exports = (app, _options, done) => {
  app.register(count)

  done()
}
