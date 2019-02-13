import React, { PureComponent } from 'react';
import { arrayOf, shape, number, bool, string } from 'prop-types';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem';
import { connect } from 'react-redux';


class TodoList extends PureComponent {
  static propTypes = {
    todos: arrayOf(shape({id: number, text: string, completed: bool})),
  };

  // shouldComponentUpdate(nextProps) {
  //   return this.props.todos !== nextProps.todos;
  // }

  render() {
    const todoItems = this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)

    return (
      <div className="TodoList">
        {todoItems}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

const TodoListContainer = connect(mapStateToProps)(TodoList);

export {
  TodoList,
  TodoListContainer,
};
