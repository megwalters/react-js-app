import React, { Component } from 'react';
import logo from './party_cat.jpeg';
import music_cat from './music_cat.jpeg';
import cat_friends from './cat_friends.jpeg';
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
          Get some great tunes <br/><p></p>
          <img src={music_cat}/> <br/><p></p>
            Get some friends together <br/><p></p>
            <img src={cat_friends}/>
          </p>
      </div>
    );
  }
}

export default App;
