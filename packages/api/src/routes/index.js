const register = require('#routes/user/register.js')

const count = require('#routes/count.js')

module.exports = (app, _options, done) => {
  app.register(register, { prefix: '/user' })

  app.register(count)

  done()
}
