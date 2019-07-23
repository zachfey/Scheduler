import React, { Component } from "react";
import Year from "../../components/Year";
import Months from '../../components/Months';
import Weeks from '../../components/Weeks';
import WeekSchedule from '../../components/WeekSchedule'
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
import { Col, Row, Container, Breadcrumb } from 'react-bootstrap'
const moment = require('moment')

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

let years = []
for (let i = 2015; i <= moment().format('YYYY'); i++) { //TODO: update this to current year when done
  years.push(i);
}




class Scheduler extends Component {
  // Setting the initial state - the mneu will open to the current week
  constructor() {
    super();
    this.state = {
      selectedYear: moment().format('YYYY'),
      selectedMonth: moment().format('M'),
      selectedWeek: moment().format('W'),
      week: null
    }
    this.clickButton = this.clickButton.bind(this)
    this.renderSchedule = this.renderSchedule.bind(this)
  }

  clickButton() { //test button at the top of the page

  };

  componentDidMount() {
    this.findWeekSchedule(this.state.selectedWeek, this.state.selectedYear)
  }

  weekOfYear = (month, year) => {
    if (parseInt(month) < 13) {
      return (
        parseInt(moment(month + ' ' + year, "M-YYYY").week())
      )
    } else {
      return (53)
    }
  }

  //pull that week's schedule then sets state
  findWeekSchedule = (week, year) => {
    this.pullSchedule(week, year, res => {
      this.setState({
        week: res,
      },
        () => { console.table(this.state.week) }
      )
    })
  }

  createEmptySchedule = (week, year) => {
    API.createWeek(week, year, res => {
      console.log('new week', res.data)
      this.findWeekSchedule(week, year);
    })
  }

  //pullSchedule is used when a week is clicked on. It pulls that week's schedule from Mongo and returns via callback
  pullSchedule = (week, year, callback) => {
    API.getWeek(week, year)
      .then(res => {
        if (res.data) {
          if(res.data.rows.length > 0){
            callback(res.data)
          } else{
            API.fixWeek(week, year, res => {
              console.log('fixed week', res.data)
              this.findWeekSchedule(week, year);
            })
          }
        } else {
          callback(
            this.createEmptySchedule(week, year)
          )
        }

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
    return (
      <Breadcrumb>
        {years.map(year => {
          if (year === parseInt(this.state.selectedYear)) {
            return (
              <React.Fragment key='activeYear'>
                <Year
                  key={year.toString()}
                  year={year}
                  handleClick={this.handleClick}
                />
                {this.renderMonths(year)}
              </React.Fragment>
            )
          }
          return (
            <Year
              key={year.toString()}
              year={year}
              handleClick={this.handleClick}
            />
          )
        })}
      </Breadcrumb>
    )
  }

  renderMonths = year => {
    return (
      <Breadcrumb>
        {months.map(month => {
          if (month === parseInt(this.state.selectedMonth)) {
            return (
              <React.Fragment key='activeMonth'>
                <Months
                  key={month.toString()}
                  month={month}
                  handleClick={this.handleClick}
                  monthNames={monthNames}
                />
                {this.renderWeeks(month, year)}
              </React.Fragment>
            )
          } else {
            return (
              <Months
                key={month.toString()}
                month={month}
                handleClick={this.handleClick}
                monthNames={monthNames}
              />
            )
          }
        })}
      </Breadcrumb>
    )

  }

  renderWeeks(month, year) {
    return (
      <Breadcrumb>
        {weeks.map(week => {
          if (week < this.weekOfYear((parseInt(month + 1)), year) && week >= this.weekOfYear(month, year)) {
            if (week === parseInt(this.state.selectedWeek)) {
              // console.log('this.state: ' + this.state)
              return (
                <Weeks
                  key={week.toString()}
                  week={week}
                  handleClick={this.handleClick}
                  weekDisplayStart={moment(week + '-' + year, "w-YYYY").add(1, 'd').format('M/D/YY')}
                  weekDisplayEnd={
                    (week < 52) ?
                      moment((week + 1) + '-' + year, "w-YYYY").format('M/D/YY')
                      :
                      moment(1 + '-' + (parseInt(year) + 1), "w-YYYY").format('M/D/YY')
                  }
                  selected={true}
                />
              )
            } else {
              return (
                <Weeks
                  key={week.toString()}
                  week={week}
                  handleClick={this.handleClick}
                  weekDisplayStart={moment(week + '-' + year, "w-YYYY").add(1, 'd').format('M/D/YY')}
                  weekDisplayEnd={
                    (week < 52) ?
                      moment((week + 1) + '-' + year, "w-YYYY").format('M/D/YY')
                      :
                      moment(1 + '-' + (parseInt(year) + 1), "w-YYYY").format('M/D/YY')
                  }
                  selected={false}
                />
              )
            }
          }
          return (null)
        })}
      </Breadcrumb>
    )
  }

  renderSchedule() {
    console.log('render schedule')
    if (this.state.selectedWeek && this.state.week) {

      if (parseInt(this.state.selectedWeek) === parseInt(this.state.week.week)) {
        return (
          <React.Fragment>
            <h1>Week {this.state.selectedWeek}</h1>
            <WeekSchedule
              key={(this.state.week.toString() + 'sched')}
              week={this.state.week}
              renderschedule = {this.renderSchedule}
            />
          </React.Fragment>
        )
      } else {
        return (
          'Loading'
        )
      }
    } else {
      return (
        <br />
      )
    }
  }

  render() {
    // console.log(this.state)
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            {this.renderYears()}
            {this.renderSchedule()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Scheduler;
