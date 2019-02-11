import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }

  render() {
    // pour avoir accès aux props : this.props
    return (
      <div className="Clock">
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}

export {
  Clock,
}