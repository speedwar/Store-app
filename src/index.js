import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import App from './App.js';
import './assets/scss/main.scss';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
