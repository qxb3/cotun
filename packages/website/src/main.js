import './app.css'
import App from './App.svelte'

import Prism from 'prismjs'
import 'prismjs/components/prism-bash.js'

export default new App({
  target: document.getElementById('app')
})
