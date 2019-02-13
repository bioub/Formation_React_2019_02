import React, { PureComponent } from 'react';
import { arrayOf, shape, number, bool, string, func } from 'prop-types';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem';


class TodoList extends PureComponent {
  static propTypes = {
    onDelete: func,
    todos: arrayOf(shape({id: number, text: string, completed: bool})),
  };

  // shouldComponentUpdate(nextProps) {
  //   return this.props.todos !== nextProps.todos;
  // }

  render() {
    const todoItems = this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete={this.props.onDelete} />)

    return (
      <div className="TodoList">
        {todoItems}
      </div>
    );
  }
}


export {
  TodoList,
};
