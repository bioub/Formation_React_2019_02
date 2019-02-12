import React, { Component } from 'react'
import { Hello } from './Hello';
import { Clock } from './Clock';
import { Counter } from './Counter';
import { LoginForm } from './LoginForm';
import { Select } from './Select';

class App extends Component {
  state = {
    selected: 'Eric',
  };

  handleSelected = (selected) => {
    this.setState({
      selected,
    });
  }

  render() {
    return (
      <div className="App">
        <Hello name="Romain" /> {/* React.createElement(Hello, {name: 'Romain'})*/}
        <Hello name={this.state.selected} />
        <Clock />
        <Counter />
        <LoginForm />
        <Select items={['Jean', 'Eric']} selected={this.state.selected} onSelected={this.handleSelected} />
      </div>
    )
  }
}

export {
  App,
}