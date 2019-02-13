import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import { Route, Link, Switch } from 'react-router-dom';
import ContactShow from './ContactShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/contacts">Lister</Link>
          <Link to="/contacts/show">Afficher</Link>
        </nav>
        <div>
          {/* <Route path="/" component={ContactList} exact={true} /> */}
          {/* <Switch>
            <Route path="/show" component={ContactShow} />
            <Route path="/" component={ContactList} />
          </Switch> */}
          <Route path="/contacts" component={ContactList} />
        </div>
      </div>
    );
  }
}

export default App;
