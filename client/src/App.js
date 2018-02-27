import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { userInfo } from 'os';
import testDB from './firebase/firebase';

class App extends Component {
  // state = {users: []}
  // componentDidMount() {
  //   fetch('/users')
  //   .then(res => res.json())
  //   .then(users => this.setState({users}));
  // }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        
        <ul>
          <p>la la la</p>
        </ul>
      </div>
    );
  }
}

export default App;
