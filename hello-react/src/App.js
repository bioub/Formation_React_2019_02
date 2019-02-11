import React, { Component } from 'react'
import { Hello } from './Hello';
import { Clock } from './Clock';
import { Counter } from './Counter';
import { LoginForm } from './LoginForm';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Hello name="Romain" /> {/* React.createElement(Hello, {name: 'Romain'})*/}
        <Hello name="Eric" />
        <Clock />
        <Counter />
        <LoginForm />
      </div>
    )
  }
}
