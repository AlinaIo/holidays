import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { userInfo } from 'os';
import Month from "./components/Month";
import moment from "moment";

class App extends Component {
  state = {
    name: "employeeName",
    employeeNumber: "0",
    employmentDate: "0",
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
        if (employee.length > 0)
          this.setState({
            name: employee[0].name,
            employeeNumber: employee[0].employeeNumber,
            employmentDate: employee[0].employmentDate,
            daysPreviousYear: employee[0].daysPreviousYear,
            daysCurrentYear: employee[0].daysCurrentYear,
            totalDaysRemaining: employee[0].totalDaysRemaining,
            january: employee[0].january,
            february: employee[0].february,
            march: employee[0].march,
            april: employee[0].april,
            may: employee[0].may,
            june: employee[0].june,
            july: employee[0].july,
            august: employee[0].august,
            september: employee[0].september,
            october: employee[0].october,
            november: employee[0].november,
            december: employee[0].december
          });
      });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <div>
            <h1 className="header__title">
              Hello {this.state.name.split(" ")[1]}
            </h1>
          </div>
          <p className="header__data">
            {"@Haufe for "}
            {moment([
              this.state.employmentDate.split("/")[2],
              this.state.employmentDate.split("/")[1],
              this.state.employmentDate.split("/")[0]
            ]).toNow(true)}
          </p>
          <p className="header__data">
            Total Days:{" "}
            {this.state.daysCurrentYear + this.state.daysPreviousYear} -
            Remaining Days: {this.state.totalDaysRemaining}
          </p>
        </div>
        <ul>
          <Month month="January:" days={this.state.january} image="january" />
          <Month month="February:" days={this.state.february} image="february" />
          <Month month="March:" days={this.state.march} image="march" />
          <Month month="April:" days={this.state.april} image="april" />
          <Month month="May:" days={this.state.may} image="may" />
          <Month month="June:" days={this.state.june} image="june" />
          <Month month="July:" days={this.state.july} image="july" />
          <Month month="August:" days={this.state.august} image="august" />
          <Month month="September:" days={this.state.september} image="september" />
          <Month month="October:" days={this.state.october} image="october" />
          <Month month="November:" days={this.state.november} image="november" />
          <Month month="December:" days={this.state.december} image="december" />
        </ul>
      </div>
    );
  }
}

export default App;
