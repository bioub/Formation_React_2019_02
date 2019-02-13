import React from 'react';
import ReactDOM from 'react-dom';
import { TodoItem } from './TodoItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoItem todo={{id: 1, text: '', completed: false}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
