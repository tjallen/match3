import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import './styles.css';
import App from './components/App';
// import match3 from './reducers';
import cells from './reducers/cells';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { POPULATE_BOARD } from './actions';

const middleware = applyMiddleware(logger);

const store = createStore(
  cells,
  composeWithDevTools(
    middleware
  )
);

window.store = store;

store.subscribe(() => {
  console.log('store changed', store.getState());
})

store.dispatch({type: POPULATE_BOARD})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
