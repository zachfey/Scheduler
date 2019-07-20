import React, { Component } from "react";
import Row from '../Row';
import { Table } from 'react-bootstrap';
import API from '../../utils/API'
import '../table.css';
import { createBrotliCompress } from "zlib";
const moment = require('moment')

const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

class WeekSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = { //TODO change this from state to database query
            weekSchedule: this.props.week || {}
        }
        // this.updateSchedule = this.updateSchedule.bind(this);
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
                API.updateWeek(newSched, res => {cb()})

            default:
                break;
        }
    }

    deleteRow(rowIndex){
        let newSched = this.state.weekSchedule
        let newRows = []
        for(let i = 0; i < newSched.rows.length; i++){
            console.log(i)
            if(i !== parseInt(rowIndex)){
                newRows.push(newSched.rows[i])
            }
        }
        newSched.category = 'deleteRow'
        newSched.rows = newRows;
        this.saveChanges(newSched, res => console.log(res))//TODO don't save changes immediately until user confrims
    }

    addRow(rowIndex){
        console.log('rowIndex', rowIndex)
    }

    render() {
        // console.log(this.state.week.rows)
        return (
            <Table striped bordered hover>

                <thead>
                    <tr>
                        {dayArray.map(day => <th>{day}</th>)}
                    </tr>
                    <tr>
                        <th></th>
                        {this.populateDates(this.state.weekSchedule.week, this.state.weekSchedule.year).map(date => <th>{date}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.state.weekSchedule.rows.map((row, index) => {
                        return (
                            <Row
                                key={row}
                                rowindex={index}
                                row={row}
                                saveChanges={this.saveChanges}
                                deleterow = {this.deleteRow}
                                addrow = {this.addRow}
                            />
                        )
                    })}
                    <tr>

                    </tr>
                </tbody>
            </Table >
        )
    }

}

export default WeekSchedule;
