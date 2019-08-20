import React, { Component } from "react";
import RowData from '../RowData';
import { Container, Row, Col } from 'react-bootstrap';
import API from '../../utils/API'
// import '../table.css';
// import { createBrotliCompress } from "zlib";
const moment = require('moment')

const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const emptyRow = {
    days: [{
        numGuests: '',
        guides: ['']
    },
    {
        numGuests: '',
        guides: ['']
    },
    {
        numGuests: '',
        guides: ['']
    },
    {
        numGuests: '',
        guides: ['']
    },
    {
        numGuests: '',
        guides: ['']
    },
    {
        numGuests: '',
        guides: ['']
    },
    {
        numGuests: '',
        guides: ['']
    }
    ],
    time: '',
    type: ''
}

class WeekSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = { //TODO change this from state to database query
            weekSchedule: this.props.week || {}
        }
        this.saveChanges = this.saveChanges.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.addRow = this.addRow.bind(this);
    }

    componentDidUpdate() {

    }

    populateDates(week, year) { //returns an array with each date of the given week (e.g. 1-Jul, 2-Jul, 3-Jul, etc.)
        const date = moment(week + ' ' + year, "w-YYYY")
        let dateArray = []
        for (let i = 1; i < 8; i++) {
            dateArray.push(moment(date).add(i, 'day').format('D-MMM'))
        }
        return dateArray
    }

    saveChanges(state, cb) {
        // console.log('event', event)
        // console.log('inside savechanges in weekschedule')
        let newSched = this.state.weekSchedule;
        console.log('changes to save: ', state)
        const rowIndex = state.rowIndex;
        // console.log(rowIndex)
        // console.log(newSched.rows)
        switch (state.category) {
            case 'type':
                const { time, type } = state;
                newSched.rows[rowIndex].time = time;
                newSched.rows[rowIndex].type = type;
                // console.log('newSched type', newSched)
                API.updateWeek(newSched, res => {
                    cb()
                    // console.log('saved data', res)
                });
                break;

            case 'detail':
                const { dayIndex, numGuests, guides } = state;
                newSched.rows[rowIndex].days[dayIndex].numGuests = numGuests;
                newSched.rows[rowIndex].days[dayIndex].guides = guides;
                console.log('newSched detail', newSched)
                API.updateWeek(newSched, res => {
                    cb()
                    // console.log('saved data', res)
                });
                break;

            case 'deleteRow':
                API.updateWeek(newSched, res => cb(res))
                break;

            case 'addRow':
                API.updateWeek(newSched, res => cb(res))
                break;

            default:
                break;
        }
    }

    deleteRow(rowIndex) {
        let newSched = this.state.weekSchedule
        let newRows = []
        for (let i = 0; i < newSched.rows.length; i++) {
            console.log(i)
            if (i !== parseInt(rowIndex)) {
                newRows.push(newSched.rows[i])
            }
        }
        newSched.category = 'deleteRow'
        newSched.rows = newRows;
        this.saveChanges(newSched, res => this.setState({ weekSchedule: newSched }))//TODO don't save changes immediately until user confrims
    }

    addRow(rowIndex) {
        let newSched = this.state.weekSchedule;
        // console.log('before row added', newSched);
        // console.log('insert after',rowIndex)
        newSched.rows.splice(rowIndex + 1, 0, emptyRow);
        newSched.category = 'addRow'
        // console.log('blank row added', newSched)
        this.saveChanges(newSched, res => this.setState({ weekSchedule: newSched }));
    }

    render() {
        console.log('weekSchedule', this.state.weekSchedule)
        return (
            // <Table striped bordered hover>
            <Container fluid='true'>
                <Col>
                    <Row>
                        <Col></Col>
                        {dayArray.map(day => <Col key={day}><h4>{day}</h4></Col>)}
                    </Row>
                    <Row>
                        <Col></Col>

                        {this.populateDates(this.state.weekSchedule.week, this.state.weekSchedule.year).map(date => <Col key={date}><h5>{date}</h5></Col>)}
                    </Row>

                    {(this.state.weekSchedule && this.state.weekSchedule.rows && this.state.weekSchedule.rows.map((row, index) => {
                        return (
                            <RowData
                                key={index}
                                rowindex={index}
                                row={row}
                                saveChanges={this.saveChanges}
                                deleterow={this.deleteRow}
                                addrow={this.addRow}
                            />
                        )
                    }))}
                </Col>
            </Container>
        )
    }

}

export default WeekSchedule;
