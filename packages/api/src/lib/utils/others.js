const { randomBytes } = require('crypto')

const randomId = (size) => {
  return randomBytes(size).toString('hex')
}

module.exports = {
  randomId
}
