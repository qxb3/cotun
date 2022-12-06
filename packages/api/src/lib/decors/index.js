const plugin = require('fastify-plugin')

const errorMessages = require('#decors/error-messages.js')

module.exports = plugin((app, _options, done) => {
  app.decorate('errors', errorMessages)

  done()
})
