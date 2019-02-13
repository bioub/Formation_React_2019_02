import { todosReducer } from "./reducers";

it ('should add todo in state', () => {
  const state = [];
  const newTodo = {id: 123, text: 'Acheter du pain'};
  const nextState = todosReducer(state, {type: 'TODO_ADD', payload: newTodo});
  expect(state === nextState).toBe.false;
  expect(nextState[0]).toEqual(newTodo);
});