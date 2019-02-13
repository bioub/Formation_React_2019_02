import { selectTodosModule } from "./selectors";

it ('should select todos Modules', () => {
  const state = {
    todos: {
      newTodo: 'Achet',
      todos: [],
    },
  };

  const todosModule = selectTodosModule(state);
  expect(todosModule).toEqual(state.todos);
});