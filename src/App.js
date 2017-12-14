import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideBar from './SideBar';
import Main from './Main';

const url = "https://randomuser.me/api/?results=10";

export default class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(users => {
      this.setState({
        users: users.results
      });
    })
  }

  render() {
    const { users } = this.state;
    return (
      <Router>
        <div className="container-fluid">
          <Route path="/" exact={true} render={() => (
            <h4>Fetch API with React and React Router Demo</h4>
          )} />

          <div className="row">
            <div className="col-sm">
              <SideBar users={users} />
            </div>
            <div className="col-sm">
              <Main users={users} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}