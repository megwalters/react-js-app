import React, { Component } from 'react';
import logo from './party_cat.jpeg';
import music_cat from './music_cat.jpeg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Party cat's page of parties</h2>
        </div>
        <p className="App-intro">
          Compilation of party cat's suggestions to have a great weekend
        </p>
        <p>
          <ul> 
          <li> Get some great tunes
            </li>
          </ul>
          <img src={music_cat}/>
          </p>
      </div>
    );
  }
}

export default App;
