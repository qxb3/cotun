const { createSchema } = require('../utils/db')

module.exports = createSchema('counties', {
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
})
