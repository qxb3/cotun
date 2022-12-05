import { multiLine } from './utils.js'

const API_URL = 'https://api.cotun.tk'

export const usages = {
  axios: multiLine(4, `
    // Increment
    await axios.post('${API_URL}/counter/name?type=increment', {
      headers: {
        Authorization: 'Api-Key'
      }
    })

    // Decrement
    await axios.post('${API_URL}/counter/name?type=decrement', {
      headers: {
        Authorization: 'Api-Key'
      }
    })
  `),
  '@cotun/js': multiLine(6, `
    import cotun from '@cotun/js'

    const counter = cotun({
      apiKey: 'Api-Key'
    })

    await counter.increment('name') // Increment
    await counter.decrement('name') // Decrement
  `)
}
