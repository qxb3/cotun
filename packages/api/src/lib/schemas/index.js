const plugin = require('fastify-plugin')

const account = require('#schemas/account.js')
const counter = require('#schemas/counter.js')

module.exports = plugin((app, _options, done) => {
  app.addSchema(account)
  app.addSchema(counter)

  done()
})
