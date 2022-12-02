require('dotenv/config')

const { build } = require('./app')

async function start() {
  const port = process.env.PORT || 5000
  const app = build({
    logger: {
      transport: process.env.NODE_ENV === 'development' ? {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname'
        }
      } : null
    }
  })

  try {
    await app.listen({ port })
  } catch(err) {
    app.logger.error(err)
  }
}

start()
