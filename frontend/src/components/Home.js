import React, { Component } from 'react';
import { Button } from 'reactstrap';

import logo from '../logo.svg';

class Home extends Component {
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        <Button color="danger">Danger!</Button>
      </p>
    </div>;
  };
}

export default Home;