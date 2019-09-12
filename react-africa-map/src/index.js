import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './compenents/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('main'));

serviceWorker.unregister();
