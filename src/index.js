import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const store = createStore(
  allReducers,
  composeEnhancers(
  applyMiddleware(multi, thunk)
  )
);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#root')
);
