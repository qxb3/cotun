module.exports = {
  $id: 'user',
  type: 'object',
  properties: {
    id: { type: 'string' },
    username: { type: 'string' },
    password: { type: 'string' },
    apiKey: { type: 'string' },
    counters: {
      type: 'array',
      items: {
        name: { type: 'string' },
        count: { type: 'integer' }
      }
    }
  }
}
