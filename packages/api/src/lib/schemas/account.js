module.exports = {
  $id: 'account',
  type: 'object',
  properties: {
    id: { type: 'string' },
    apiToken: { type: 'string' },
    counters: {
      type: 'array',
      items: { $ref: 'counter' }
    }
  }
}
