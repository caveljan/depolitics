import React from 'react';
import ReactDOM from 'react-dom';

import './App/index.css';
import App from './App';
import * as serviceWorker from './App/serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
