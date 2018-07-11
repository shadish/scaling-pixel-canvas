import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {setupCanvas} from './runCanvas'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

setupCanvas()
