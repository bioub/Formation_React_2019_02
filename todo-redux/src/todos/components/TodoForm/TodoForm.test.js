import React from 'react';
import { shallow } from 'enzyme';
import { TodoForm } from './TodoForm';

it('contains an input with value in prop newTodo', () => {
  const wrapper = shallow(<TodoForm newTodo="Acheter" onNewTodoChange={() => {}}  onNewTodoSubmit={() => {}} />);
  expect(wrapper.find('input').get(0).props.value).toEqual("Acheter");
});

it('should call onNewTodoSubmit on submit', () => {
  const fakeEvent = {
    preventDefault: jest.fn(),
  };
  const onNewTodoSubmit = jest.fn();
  const wrapper = shallow(<TodoForm newTodo="Acheter" onNewTodoChange={() => {}}  onNewTodoSubmit={onNewTodoSubmit} />);
  wrapper.find('form').simulate('submit', fakeEvent);

  expect(fakeEvent.preventDefault).toBeCalled();
  expect(onNewTodoSubmit).toBeCalledWith('Acheter');
});


