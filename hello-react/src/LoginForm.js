import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    username: 'toto',
    password: '1234',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form className="LoginForm">
        <div>
          Username : <input name="username" value={this.state.username} onChange={this.handleChange} />
        </div>
        <div>
          Password : <input name="password" type="password" value={this.state.password}  onChange={this.handleChange} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export {
  LoginForm,
}