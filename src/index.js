import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles.css';
import App from './components/App';
// import match3 from './reducers';
import cells from './reducers/cells';

let store = createStore(cells);

console.log('store =>', store.getState());

store.subscribe(() => {
  document.body.innerText = store.getState();
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
