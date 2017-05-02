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

const middleware = applyMiddleware(logger);

const store = createStore(
  cells,
  composeWithDevTools(
    middleware
  )
);

store.subscribe(() => {
  console.log('store changed', store.getState());
})

store.dispatch({type: 'SOME_ACTION_TYPE', content: 'foo'})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
