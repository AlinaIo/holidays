import React, { Component } from "react";
import Month from "./Month";
import "../scss/main.scss";
import moment from "moment";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  componentDidMount() {
    fetch("/react")
      .then(res => res.json())
      .then(employee => {
        console.log(employee);
        if (employee.length > 0) {
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
        }
      });
  }
  render() {
    return (
      <div className="App">
        <div className="show-for-mobile">
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
            <Month
              month="February:"
              days={this.state.february}
              image="february"
            />
            <Month month="March:" days={this.state.march} image="march" />
            <Month month="April:" days={this.state.april} image="april" />
            <Month month="May:" days={this.state.may} image="may" />
            <Month month="June:" days={this.state.june} image="june" />
            <Month month="July:" days={this.state.july} image="july" />
            <Month month="August:" days={this.state.august} image="august" />
            <Month
              month="September:"
              days={this.state.september}
              image="september"
            />
            <Month month="October:" days={this.state.october} image="october" />
            <Month
              month="November:"
              days={this.state.november}
              image="november"
            />
            <Month
              month="December:"
              days={this.state.december}
              image="december"
            />
          </ul>
        </div>

        <div className="row show-for-desktop">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span class="card__heading-span card__heading-span--1">
                    January
                  </span>
                </h4>
                <div className="card__details">{this.state.january}</div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                BACK
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <div className="card__heading">
                  <span class="card__heading-span card__heading-span--1">
                    February
                  </span>
                </div>
                <div className="card__details">{this.state.february}</div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                BACK
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span class="card__heading-span card__heading-span--1">
                    March
                  </span>
                </h4>
                <div className="card__details">{this.state.march}</div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                BACK
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
