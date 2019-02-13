import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import ContactShow from './ContactShow';
import axios from 'axios';

interface User {
  id: number,
  name: string
}

interface State {
  users: User[]
  loading: boolean
}

export default class ContactList extends Component {

  state: State = {
    users: [],
    loading: true,
  };

  async componentDidMount() {
    // const xhr = new XMLHttpRequest();
    // fetch({
    //   method: 'GET',
    //   url: ''
    // })
    const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: res.data,
      loading: false
    });
  }
  render() {
    const lis = this.state.users.map((user) => (
      
      <li key={user.id}>
        <Link to={'/contacts/' + user.id}>
          {user.name}
        </Link>
      </li>
    ));

    return (
      <div>
        {this.state.loading && <div>loading...</div>}
        <ul>
          {lis}
        </ul>
        <Route path="/contacts/:id" component={ContactShow} />
      </div>
    )
  }
}
