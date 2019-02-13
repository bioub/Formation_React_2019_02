import { TODO_CHANGE, TODO_ADD, TODO_REMOVE } from "./constants";

function newTodoReducer(previousState = 'Achet', action) {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    default:
      return previousState;
  }
}

function todosReducer(previousState = [{id: 1, text: 'Test', completed: false}], action) {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...previousState,
        action.payload,
      ];
    case TODO_REMOVE:
      const i = previousState.indexOf(action.payload);
      return [
        ...previousState.slice(0, i),
        ...previousState.slice(i + 1),
      ];
    default:
      return previousState;
  }
}

// const nextState = newTodoReducer('', {type: 'TODO_CHANGE', value: 'test'});

export {
  newTodoReducer,
  todosReducer,
}