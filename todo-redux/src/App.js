import React, { Component } from 'react';
import './App.css';
import { TodoFormContainer } from './todos/containers/TodoFormContainer';
import { TodoListContainer } from './todos/containers/TodoListContainer';
import { TodoCountContainer } from './todos/containers/TodoCountContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoFormContainer />
        <TodoListContainer />
        <TodoCountContainer />
      </div>
    );
  }
}

export {
  App,
};
