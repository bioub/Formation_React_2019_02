import React, { Component } from 'react';
import './App.css';
import { CounterContainer } from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <CounterContainer />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
