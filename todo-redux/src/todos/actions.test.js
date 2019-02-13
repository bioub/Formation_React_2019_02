import { todoChange } from "./actions";

it('should create todoChange action', () => {
  const action = todoChange('Achet');
  expect(action.type).toEqual('TODO_CHANGE');
  expect(action.payload).toEqual('Achet');
});