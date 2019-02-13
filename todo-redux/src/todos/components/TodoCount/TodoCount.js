import React, { Component } from 'react'

class TodoCount extends Component {
  render() {
    return (
      <div>
        {this.props.todoCount} todos
      </div>
    )
  }
}

export {
  TodoCount,
}