import React, { Component } from 'react';
import logo from './party_cat.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is an awesome react web page</h2>
        </div>
        <p className="App-intro">
          This is a code change.  Yay!
        </p>
      </div>
    );
  }
}

export default App;
