const plugin = require('fastify-plugin')

const errorMessages = require('./error-messages')

module.exports = plugin((app, _options, done) => {
  app.decorate('errors', errorMessages)

  done()
})
