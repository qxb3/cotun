const plugin = require('fastify-plugin')

const errorMessages = require('#decors/error-messages.js')
const auth = require('#decors/auth.js')

module.exports = plugin((app, _options, done) => {
  app.decorate('errors', errorMessages)
  app.decorate('auth', auth)

  done()
})
