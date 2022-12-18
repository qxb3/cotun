const register = require('#routes/user/register.js')
const login = require('#routes/user/login.js')

const create = require('#routes/create.js')
const remove = require('#routes/remove.js')
const get = require('#routes/get.js')
const count = require('#routes/count.js')

module.exports = (app, _options, done) => {
  app.register(register, { prefix: '/user' })
  app.register(login, { prefix: '/user' })

  app.register(create)
  app.register(remove)
  app.register(get)
  app.register(count)

  done()
}
