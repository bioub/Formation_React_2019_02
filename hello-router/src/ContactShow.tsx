import React, { Component } from 'react'
import axios from 'axios';

export default class ContactShow extends Component {

  props: any;
  state: any = {
    user: null,
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get<any>('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id);
    this.setState({
      user: res.data,
      loading: false
    });
  }

  async componentDidUpdate() {
    if (this.state.user && Number(this.props.match.params.id) === this.state.user.id) {
      return;
    }

    const res = await axios.get<any>('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id);
    this.setState({
      user: res.data,
      loading: false
    });
  }

  render() {
    let content = <div>Loading...</div>;

    if (!this.state.loading) {
      content = (
        <div>
          <p>Name : {this.state.user.name}</p>
          <p>Email : {this.state.user.email}</p>
          <p>Tel : {this.state.user.phone}</p>
        </div>
      );
    }

    return content;
  }
}
