const fastify = require('fastify')

const build = (opts = {}) => {
  const app = fastify(opts)

  app.register(require('@fastify/cors'), {
    origin: process.env.CLIENT_URL,
    credentials: true
  })
  app.register(require('@fastify/cookie'))
  app.register(require('@fastify/sensible'))

  app.register(require('#decors/index.js'))
  app.register(require('#schemas/index.js'))
  app.register(require('#routes/index.js'))

  return app
}

module.exports = { build }
