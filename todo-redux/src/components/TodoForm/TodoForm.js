import React, { Component } from 'react';
import { string, func } from 'prop-types';
import './TodoForm.css';

class TodoForm extends Component {
  static propTypes = {
    newTodo: string.isRequired,
    onNewTodoChange: func.isRequired,
    onNewTodoSubmit: func.isRequired,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewTodoSubmit(this.props.newTodo);
  };

  handleChange = (event) => {
    this.props.onNewTodoChange(event.target.value);
  };

  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input value={this.props.newTodo} onChange={this.handleChange} />
        <button>+</button>
      </form>
    );
  }
}

export {
  TodoForm,
};
