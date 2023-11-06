import '/css/style.css'
import javascriptLogo from '/images/javascript.svg'
import viteLogo from '/images/public/vite.svg'
import { setupCounter } from '/js/counter.js'

import dayjs from 'dayjs'

let now = dayjs();
console.log(now.format("MMM D, YYYY"));

const date1 = dayjs("2023-09-5");
const date2 = dayjs("2023-10-30");
let df4 = date2.diff(date1, "day"); 
console.log(df4);

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h2>Today's date: ${now.format("MMM D, YYYY")}</h2>
    <h2>The number of days since this program started on Sept 5, 2023: ${df4} days</h2>
  </div>
`

setupCounter(document.querySelector('#counter'))

