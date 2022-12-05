// Errors
const SomethingWentWrong = 'Something went wrong... Please try again later.'

const response = (app, reply, err) => {
  app.log.error(err)
  reply.internalServerError(SomethingWentWrong)
}

module.exports = {
  SomethingWentWrong,
  response
}
