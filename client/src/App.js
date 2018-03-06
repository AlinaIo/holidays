import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { userInfo } from 'os';
import Month from './components/Month';

class App extends Component {
  state = {
    name: "employeeName",
    employeeNumber: "0",
    daysPreviousYear: 0,
    daysCurrentYear: 0,
    totalDaysRemaining: 0,
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0
  };
  componentDidMount() {
    fetch("/testing")
      .then(res => res.json())
      .then(employee => {
        console.log(employee);
        if(employee.length > 0)
          this.setState({
            name: employee[0].name,
            employeeNumber: employee[0].employeeNumber,
            daysPreviousYear: employee[0].daysPreviousYear,
            daysCurrentYear: employee[0].daysCurrentYear,
            totalDaysRemaining: employee[0].totalDaysRemaining,
            january:employee[0].january,
            february:employee[0].february,
            march:employee[0].march,
            april:employee[0].april,
            may:employee[0].may,
            june:employee[0].june,
            july:employee[0].july,
            august:employee[0].august,
            september:employee[0].september,
            october:employee[0].october,
            november:employee[0].november,
            december:employee[0].december
          });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name.split(' ')[1]}</h1>
        <ul> 
          <p>{this.state.employeeNumber} - @Haufe for x years</p>
          <p>
            Total Days: {this.state.daysCurrentYear + this.state.daysPreviousYear} - 
            Remaining Days: {this.state.totalDaysRemaining}
          </p>

          <Month month="January:" days={this.state.january} image="january"/>
          <Month month="February:" days={this.state.february} image="february"/>
          <Month month="March:" days={this.state.march} image=""/>
          <Month month="April:" days={this.state.april} image=""/>
          <Month month="May:" days={this.state.may} image=""/>
          <Month month="June:" days={this.state.june} image=""/>
          <Month month="July:" days={this.state.july} image=""/>
          <Month month="August:" days={this.state.august} image=""/>
          <Month month="September:" days={this.state.september} image=""/>
          <Month month="October:" days={this.state.october} image=""/>
          <Month month="November:" days={this.state.november} image=""/>
          <Month month="December:" days={this.state.december} image=""/>
        </ul>
      </div>
    );
  }
}

export default App;
