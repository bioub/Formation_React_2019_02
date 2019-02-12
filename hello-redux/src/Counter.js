import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
  increment = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }

  render() {
    return (
      <button className="Counter" onClick={this.increment}>
        {this.props.count}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

const CounterContainer = connect(mapStateToProps)(Counter);

export {
  Counter,
  CounterContainer,
}