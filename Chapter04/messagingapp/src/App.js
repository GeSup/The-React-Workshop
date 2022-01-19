import React, { Component } from 'react';
import './App.css';
import UserCountDisplay from './UserCountDisplay';
import LoginDisplay from './LoginDisplay';

class App extends Component {

  render() {
    return (<div className="App"><h2>Messaging App</h2>
    <UserCountDisplay/>
    <LoginDisplay/>
    </div>)
  }
}

export default App;
