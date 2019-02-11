import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  };

  // voir les autres solutions au "problème" du this
  // https://reactjs.org/docs/faq-functions.html
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <button className="Counter" onClick={this.increment}>
        {this.state.count}
      </button>
    );
  }
}

export {
  Counter,
}