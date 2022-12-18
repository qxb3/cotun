const plugin = require('fastify-plugin')

const user = require('#schemas/user.js')
const counter = require('#schemas/counter.js')

module.exports = plugin((app, _options, done) => {
  app.addSchema(user)
  app.addSchema(counter)

  done()
})
