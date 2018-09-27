import React, { Component } from 'react';

import logo from './logo.svg';

class User extends Component {
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">User Page</h1>
      </header>
    </div>;
  };
}

export default User;