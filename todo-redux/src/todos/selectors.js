export function selectTodosModule(state) {
  return state.todos;
}

export function selectNewTodo(state) {
  return selectTodosModule(state).newTodo;
}

export function selectTodos(state) {
  return selectTodosModule(state).items;
}

export function selectTodoCount(state) {
  return selectTodos(state).length;
}