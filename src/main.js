import './style/style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './lib/counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card"><button id="counter1" type="button"></button></div>

    
  </div>
`

setupCounter(document.querySelector('#counter1'))
