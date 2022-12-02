module.exports = (app, _options, done) => {
  app.get('/', (_, reply)=> reply.send('ok'))

  done()
}
