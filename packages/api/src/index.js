require('dotenv/config')

const { build } = require('./app')

async function start() {
  const port = process.env.PORT ?? 5000
  const app = build()

  try {
    await app.listen({ port })
  } catch(err) {
    app.logger.error(err)
  }
}

start()
