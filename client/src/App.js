import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { userInfo } from 'os';

class App extends Component {
  state = {
    name: "employeeName",
    employeeNumber: "0"
  };
  componentDidMount() {
    fetch("/testing")
      .then(res => res.json())
      .then(employee => {
        this.setState({
          name: employee[0].name,
          employeeNumber: employee[0].employeeNumber
        });
        console.log("8888888888" + employee[0].name);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello </h1>

        <ul>
          {this.state.name}
          {this.state.employeeNumber}
          <p>la la la</p>
        </ul>
      </div>
    );
  }
}

export default App;
