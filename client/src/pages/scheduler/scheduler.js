import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import Year from "../../components/Year";
import Months from '../../components/Months';
import Weeks from '../../components/Weeks';
import WeekSchedule from '../../components/WeekSchedule'
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
const moment = require('moment')

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

let years = []
for (let i = 2015; i <= moment().format('YYYY'); i++) { //TODO: update this to current year when done
  years.push(i);
}

const weekOfYear = (month, year) => parseInt(moment(month + ' ' + year, "M-YYYY").week())


class Scheduler extends Component {
  // Setting the initial state
  state = {
    selectedYear: moment().format('YYYY'),
    selectedMonth: moment().format('M'),
    selectedWeek: moment().format('W'),
  }

  handleClick = (type, value) => {
    switch (type) {
      case 'year':
        if (value == this.state.selectedYear) {
          this.setState({
            selectedYear: null,
            selectedMonth: null,
            selectedWeek: null
          })
        } else {
          this.setState({
            selectedYear: value,
            selectedMonth: null,
            selectedWeek: null
          })
        }
        break;

      case 'month': //TODO: Why won't month collapse when selected month state is set to null
        if (value == this.state.selctedMonth) {
          this.setState({
            selectedMonth: null,
            selectedWeek: null
          })
        } else {
          this.setState({
            selectedMonth: value,
            selectedWeek: null
          })
        }
        break;

      case 'week':
        if (value == this.state.selectedWeek) { this.setState({ selectedWeek: null }) }
        else { this.setState({ selectedWeek: value }) }
        break;

      default:
        break;
    }
  }

  // renderMonths = (year) => {

  //   {
  //     months.map(month => {
  //       if (month == this.state.selectedMonth) {
  //         return (
  //           <div>
  //             <Months
  //               month={month}
  //               handleClick={this.handleClick}
  //               monthNames={monthNames}
  //             />
  //             {this.renderWeeks(month, year)}
  //           </div>
  //         )
  //       } else {
  //         return (
  //           <Months
  //             month={month}
  //             handleClick={this.handleClick}
  //             monthNames={monthNames}
  //           />
  //         )
  //       }
  //     })
  //   }
  // }

  // renderWeeks = (month, year) => {
  //   {
  //     weeks.map(week => {
  //       if (week < weekOfYear((parseInt(month) + 1), year) && week >= weekOfYear(month, year)) {
  //         return (
  //           <Weeks
  //             week={week}
  //             handleClick={this.handleClick}
  //             weekDisplayStart={moment(week + ' ' + year, "w-YYYY").format('M/D/YY')}
  //             weekDisplayEnd={moment((week + 1) + ' ' + year, "w-YYYY").format('M/D/YY')}
  //           />
  //         )
  //       }
  //     })
  //   }
  // }

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Today's Date</h1>
            </Jumbotron>
            {years.map(year => {
              if (year == this.state.selectedYear) {
                return (
                  <div>
                    <Year
                      year={year}
                      handleClick={this.handleClick}
                    />
                    {/* {this.renderMonths(year)} */} {/*The render months function is typed out below*/}
                    {months.map(month => {
                      if (month == this.state.selectedMonth) {
                        return (
                          <div>
                            <Months
                              month={month}
                              handleClick={this.handleClick}
                              monthNames={monthNames}
                            />
                            {weeks.map(week => {
                              if (week < weekOfYear((parseInt(month) + 1), year) && week >= weekOfYear(month, year)) {
                                if(week == this.state.selectedWeek){
                                  return(
                                    <div>
                                      <Weeks
                                        week={week}
                                        handleClick={this.handleClick}
                                        weekDisplayStart={moment(week + ' ' + year, "w-YYYY").format('M/D/YY')}
                                        weekDisplayEnd={moment((week + 1) + ' ' + year, "w-YYYY").format('M/D/YY')}
                                      />
                                      <WeekSchedule 
                                        week = {week}
                                        year = {year}
                                      />
                                    </div>
                                  )
                                } else{
                                  return (
                                    <Weeks
                                      week={week}
                                      handleClick={this.handleClick}
                                      weekDisplayStart={moment(week + ' ' + year, "w-YYYY").format('M/D/YY')}
                                      weekDisplayEnd={moment((week + 1) + ' ' + year, "w-YYYY").format('M/D/YY')}
                                    />
                                  )
                                }
                              }
                            })}
                          </div>
                        )
                      } else {
                        return (
                          <Months
                            month={month}
                            handleClick={this.handleClick}
                            monthNames={monthNames}
                          />
                        )
                      }
                    })}
                  </div>
                )
              }
              return (
                <Year
                  year={year}
                  handleClick={this.handleClick}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Scheduler;