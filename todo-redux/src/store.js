import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newTodoReducer, todosReducer } from './todos/reducers';

const store = createStore(
  combineReducers({
    todos: combineReducers({
      newTodo: newTodoReducer,
      items: todosReducer,
    }),
  }),
  composeWithDevTools(),
);

export {
  store,
}