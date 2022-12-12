const plugin = require('fastify-plugin')

const user = require('#schemas/user.js')

module.exports = plugin((app, _options, done) => {
  app.addSchema(user)

  done()
})
