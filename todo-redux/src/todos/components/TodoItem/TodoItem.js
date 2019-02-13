import React, { Component } from 'react';
import { shape, number, bool, string, func } from 'prop-types';
import './TodoItem.css';

class TodoItem extends Component {
  handleClickDelete = () => {
    this.props.onDelete(this.props.todo);
  };

  render() {
    return (
      <div className="TodoItem">
        {this.props.todo.text}
        <button onClick={this.handleClickDelete}>-</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  onDelete: func,
  todo: shape({id: number, text: string, completed: bool}),
};

export {
  TodoItem,
};
