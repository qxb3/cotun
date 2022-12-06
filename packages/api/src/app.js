const fastify = require('fastify')

const build = (opts = {}) => {
  const app = fastify(opts)

  app.register(require('@fastify/cors'))
  app.register(require('@fastify/sensible'))

  app.register(require('#decors/index.js'))
  app.register(require('#schemas/index.js'))
  app.register(require('#routes/index.js'))

  return app
}

module.exports = { build }
