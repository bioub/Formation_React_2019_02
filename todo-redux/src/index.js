import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function newTodoReducer(previousState = 'Achet', action) {
  switch (action.type) {
    case 'TODO_CHANGE':
      return action.value;
    default:
      return previousState;
  }
}

function todosReducer(previousState = [{id: 1, text: 'Test', completed: false}], action) {
  switch (action.type) {
    case 'TODO_ADD':
      return [
        ...previousState,
        action.value,
      ];
    default:
      return previousState;
  }
}


const store = createStore(
  combineReducers({
    newTodo: newTodoReducer,
    todos: todosReducer,
  }),
  composeWithDevTools(),
);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
