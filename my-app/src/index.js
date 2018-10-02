import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Analytics from './Analytics/Analytics.js';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
