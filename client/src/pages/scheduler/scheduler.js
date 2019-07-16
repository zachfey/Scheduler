import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import Year from "../../components/Year";
import Months from '../../components/Months';
import Weeks from '../../components/Weeks';
import WeekSchedule from '../../components/WeekSchedule'
import API from "../../utils/API";
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
  // Setting the initial state - the mneu will open to the current week
  state = {
    selectedYear: moment().format('YYYY'),
    selectedMonth: moment().format('M'),
    selectedWeek: moment().format('W'),
    week: null
  }

  clickButton() { //test button at the top of the page
    API.getWeek(28, 2019)
      .then(res => {
        console.table(res.data)
      })
      .catch(err => console.log(err))
    // API.getAll()
    //   .then(res =>
    //     console.table(res.data))

    //   .catch(err => console.log(err));
  };

  componentDidMount() {
    this.findWeekSchedule(this.state.selectedWeek, this.state.selectedYear)
  }


  //pull that week's schedule then sets state
  findWeekSchedule = (week, year) => {
    this.pullSchedule(week, year, res => {
      this.setState({
        week: res,
      },
        ()  => {console.table(this.state.week)}
      )
    })
  }

  //pullSchedule is used when a week is clicked on. It pulls that week's schedule from Mongo and returns via callback
  pullSchedule = (week, year, callback) => {
    API.getWeek(week, year)
      .then(res => {
        return callback(res.data)
      })
      .catch(err => console.log(err))
  }

  //handles clicks on year, month, or weeks
  handleClick = (type, value) => {
    switch (type) {
      case 'year':
        if (value === parseInt(this.state.selectedYear)) {
          // sets state to nulll to collapse menu
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

      case 'month':
        if (value === parseInt(this.state.selectedMonth)) {
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
        if (value === parseInt(this.state.selectedWeek)) {
          this.setState({
            selectedWeek: null
          })
        } else {
          this.setState({
            selectedWeek: value
          })
          this.findWeekSchedule(value, this.state.selectedYear)
        }
        break;

      default:
        break;
    }
  }

  renderYears = () => {
    return years.map(year => {
      if (year === parseInt(this.state.selectedYear)) {
        return (
          <div>
            <Year
              year={year}
              handleClick={this.handleClick}
            />
            {/* {this.renderMonths(year)} */} {/*The render months function is typed out below*/}
            {this.renderMonths(year)}
          </div>
        )
      }
      return (
        <Year
          year={year}
          handleClick={this.handleClick}
        />
      )
    })
  }

  renderMonths = year => {
    return months.map(month => {
      if (month === parseInt(this.state.selectedMonth)) {
        return (
          <div>
            <Months
              month={month}
              handleClick={this.handleClick}
              monthNames={monthNames}
            />
            {this.renderWeeks(month, year)}
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
    })
    
  }

  renderWeeks(month, year) {
    return weeks.map(week => {
      if (week < weekOfYear((parseInt(month) + 1), year) && week >= weekOfYear(month, year)) {
        if (week === parseInt(this.state.selectedWeek)) {
          console.log('this.state: '+ this.state)
          // console.log('this.state.week.week: ' + this.state.week.week)
          return (
            <div>
              <Weeks
                week={week}
                handleClick={this.handleClick}
                weekDisplayStart={moment(week + ' ' + year, "w-YYYY").format('M/D/YY')}
                weekDisplayEnd={moment((week + 1) + ' ' + year, "w-YYYY").format('M/D/YY')}
              />
              {(this.state.week && this.state.week.week === week) ? 
              <WeekSchedule
                week = {this.state.week}
              />
              :
              'Loading' //TODO add a timeout to the 'loading'
            }
              
            </div>
          )
        } else {
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
    })

  }

  render() {
    console.log(this.state)
    return (
      <Container fluid>
        <button
          onClick={this.clickButton}
        />
        <Row>
          <Col size="md-6 sm-12">
            {this.renderYears()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Scheduler;
