import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Add Profile</h1>
            <h6><font color="#808080">Add a profile for a new person</font></h6>
        </header>
          <div className= "profileInfo">
              <div className= "profilePicture">
              </div>
              <div className="username">
              </div>
          </div>
      </div>
    );
  }
}

export default App;
