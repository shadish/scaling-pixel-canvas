import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setup, tick} from './runCanvas';
import './css/index.css';

const title = 'Template Title';

ReactDOM.render(
  <div>
    {title}
    <App />
  </div>,
  document.getElementById('app')
);

setup();
tick();
window.setInterval(tick, 1000/10);

module.hot.accept();
