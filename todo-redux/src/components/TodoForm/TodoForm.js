import React, { Component } from 'react';
import { string, func } from 'prop-types';
import './TodoForm.css';
import { connect } from 'react-redux';

class TodoForm extends Component {
  static propTypes = {
    newTodo: string.isRequired,
    onNewTodoChange: func.isRequired,
    onNewTodoSubmit: func.isRequired,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'TODO_ADD', value: {id: Math.random(), text: this.props.newTodo, completed: false}});
  };

  handleChange = (event) => {
    this.props.dispatch({type: 'TODO_CHANGE', value: event.target.value});
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

function mapStateToProps(state) {
  return {
    newTodo: state.newTodo,
  };
}

const TodoFormContainer = connect(mapStateToProps)(TodoForm);

export {
  TodoForm,
  TodoFormContainer,
};
