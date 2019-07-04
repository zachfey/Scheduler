import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import Year from "../../components/Year";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
const moment = require('moment')

class Scheduler extends Component {
  // Setting our component's initial state
  state = {
    year: moment().format('YYYY'),
    month: moment().format('MMMM'),
    day: moment().format('D'),
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

  currentYear = () => moment().format('YYYY')

  render() {
    let years = []
    for (let i = 2015; i <= this.currentYear(); i++) { //update this to current year when done
      years.push(i);
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Today's Date</h1>
            </Jumbotron>
            {/* <Year newYear={years} /> */}
            {years.map(year => {
              console.log(year)
                return(
                <Year year = {year}/>
                )
            })}
            {/* <List>
                    <ListItem>
                      2017
                    </ListItem>
                    <ListItem>
                      2018
                    </ListItem>
                    <ListItem>
                      2019
                    </ListItem>
                      <p>{this.state.month} {this.state.day}, {this.state.year}</p>

              </List> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Scheduler;
