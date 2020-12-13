import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import {Provider} from 'react-redux'
import store from "./Redux/Store/store"
window.store=store
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


