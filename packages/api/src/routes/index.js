const register = require('#routes/user/register.js')
const login = require('#routes/user/login.js')
const userGet = require('#routes/user/get.js')

const create = require('#routes/create.js')
const remove = require('#routes/remove.js')
const edit = require('#routes/edit.js')
const get = require('#routes/get.js')
const count = require('#routes/count.js')

module.exports = (app, _options, done) => {
  app.register(register, { prefix: '/_user' })
  app.register(login, { prefix: '/_user' })
  app.register(userGet, { prefix: '/_user' })

  app.register(create)
  app.register(remove)
  app.register(edit)
  app.register(get)
  app.register(count)

  done()
}
