import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function countReducer(previousState = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return previousState + 1;
    default:
      return previousState;
  }
}

const store = createStore(
  combineReducers({
    count: countReducer
  }),
  composeWithDevTools(),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
