import { TODO_CHANGE, TODO_ADD, TODO_REMOVE } from "./constants";

// Flux Standard Action (FSA)
// 
export function todoChange(payload) {
  return {
    type: TODO_CHANGE,
    payload,
  };
}

export function todoAdd(newTodo) {
  return {
    type: TODO_ADD,
    payload: {
      id: Math.random(),
      text: newTodo,
      completed: false,
    },
  };
}


export function todoRemove(todo) {
  return {
    type: TODO_REMOVE,
    payload: todo,
  };
}