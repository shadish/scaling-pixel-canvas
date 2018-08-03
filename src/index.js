import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {run} from './js/run'
import './css/index.css';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
);

run();

module.hot.accept();
