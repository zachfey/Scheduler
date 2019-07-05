import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import Year from "../../components/Year";
import Months from '../../components/Months';
import Weeks from '../../components/Weeks';
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
const moment = require('moment')

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

let years = []
for (let i = 2015; i <= moment().format('YYYY'); i++) { //update this to current year when done
  years.push(i);
}

const weekOfYear = (month, year) => parseInt(moment(month + ' ' + year, "M-YYYY").week())


class Scheduler extends Component {
  // Setting our component's initial state
  state = {
    selectedYear: moment().format('YYYY'),
    selectedMonth: moment().format('M'),
    selectedWeek: moment().format('W'),
    rows: [
      {
        time: '9:15',
        type: 'Section IV',
        day: [{
          numGuests: 22,
          guides: ['Linc', 'Yook', 'Merry', 'Hunter']
        },
        {
          numGuests: 12,
          guides: ['Sarah', 'Geoff P']
        },
        {
          numGuests: null,
          guides: []
        }
        ]
      },
      {
        time: '11:30',
        type: 'Section III',
        day: []
      }
    ]
  }

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  handleClick = (type, value) => {
    switch(type){
      case 'year': 
        this.setState({selectedYear: value})
        break;
      
      case 'month':
          this.setState({selectedMonth: value})
        break;
      
      case 'week':
          this.setState({selectedWeek: value})
        break;

      default:
        break;
    }
  }

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
                      handleClick = {this.handleClick}
                    />
                    {months.map(month => {

                      if (month == this.state.selectedMonth) {
                        return (
                          <div>
                          <Months
                            month={month}
                            handleClick = {this.handleClick}
                          />
                          {weeks.map(week => {
                            if(week < weekOfYear((parseInt(month) + 1), year) && week >= weekOfYear(month, year)){
                              return(
                                <Weeks
                                  week = {week}
                                  handleClick = {this.handleClick}
                                />
                              )
                            }
                          })}
                          </div>
                        )
                      } else {
                        return (
                          <Months
                            month={month}
                            handleClick = {this.handleClick}
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
                  handleClick = {this.handleClick}
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
