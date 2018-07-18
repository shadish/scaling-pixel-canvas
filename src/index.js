import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { setup, tick } from './runCanvas';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Initialize and draw immediately.
setup();
tick();

// window.setInterval(function() {
//   tick();
// }, 1000 / 10);

function animStep(timestamp) {
  tick();
  requestAnimationFrame(animStep);
}

requestAnimationFrame(animStep);
