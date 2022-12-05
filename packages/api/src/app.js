const fastify = require('fastify')

const build = (opts = {}) => {
  const app = fastify(opts)

  app.register(require('@fastify/cors'))
  app.register(require('@fastify/sensible'))

  app.register(require('./lib/decors'))

  app.register(require('./routes'))

  return app
}

module.exports = { build }
