import React, { Component } from 'react';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import './App.css';

class App extends Component {
  state = {
    newTodo: 'Achet',
    todos: [{
      id: 1,
      text: 'Acheter du pain',
      completed: false,
    }, {
      id: 2,
      text: 'Aller au sport',
      completed: true,
    }, {
      id: 3,
      text: 'Utiliser Redux',
      completed: false,
    }],
  }

  handleNewTodoSubmit = (newTodo) => {
    const lastId = this.state.todos[this.state.todos.length - 1].id;

    const todo = {
      id: lastId + 1,
      text: newTodo,
      completed: false,
    };

    // ajout muable au tableau
    // this.state.todos.push(todo);
    // this.forceUpdate();

    // ajout immable au tableau
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  handleNewTodoChange = (newTodo) => {
    this.setState({
      newTodo,
    });
  };

  render() {
    return (
      <div className="App">
        <TodoForm newTodo={this.state.newTodo} onNewTodoChange={this.handleNewTodoChange} onNewTodoSubmit={this.handleNewTodoSubmit} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export {
  App,
};
