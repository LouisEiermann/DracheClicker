import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import allReducers from './reducers';
import { Provider } from 'react-redux';

export const store = createStore(
  allReducers,
  compose(
  applyMiddleware(multi, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#root')
);
