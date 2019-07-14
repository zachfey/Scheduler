import React, { Component } from "react";
import Row from '../Row';
import { Table } from 'react-bootstrap';
import API from '../../utils/API'
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
    }


    populateDates(week, year) { //returns an array with each date of the given week (e.g. 1-Jul, 2-Jul, 3-Jul, etc.)
        const date = moment(week + ' ' + year, "w-YYYY").format('D-MMM')
        let dateArray = []
        for (let i = 1; i < 8; i++) {
            dateArray.push(moment(date).add(i, 'day').format('D-MMM'))
        }
        return dateArray
    }

    saveChanges(rowIndex, state, dayIndex) {
        // console.log('inside savechanges in weekschedule')
        let newSched = this.state.weekSchedule;
        // console.log(state)
        switch(state.category){
            case 'type':
                const {category, time, type} = state;
                newSched.rows[rowIndex].time = time;
                newSched.rows[rowIndex].type = type;
                API.updateWeek(newSched);
                break;

            case 'detail':
                const {cat, numGuests, guides} = state;
                newSched.rows[rowIndex].days[dayIndex].numGuests = numGuests;
                newSched.rows[rowIndex].days[dayIndex].guides = guides;
                API.updateWeek(newSched);
                break;
            }
        // // const {name, value} = event.target
        // let newWeekSched = this.state.weekSchedule;
        // const row = newWeekSched.rows[rowIndex];
        // switch (category) {
        //     case 'type':
        //         switch (name) {
        //             case 'time':
        //                 console.log('current time: ' + row.time)
        //                 console.log('new time: ' + value)
        //                 newWeekSched.rows[rowIndex].time = value
        //                 break;
        //             case 'type':
        //                 console.log('current type: ' + row.type)
        //                 console.log('new type: ' + value)
        //                 newWeekSched.rows[rowIndex].type = value
        //         }
        //         break;
        //     case 'detail':
        //         if(dayIndex) {
        //             console.log('dayindex exists!')
        //             console.log('current numGuests: ' + row.days[dayIndex].numGuests)
        //             console.log('new numGuests: ' + value)
        //             newWeekSched.rows[rowIndex].days[dayIndex].numGuests = value
        //         }
        //         break;

        // }
        // console.log(this.state.row[])
        // this.setState({ [id]: value })
    }

    // handleArrayChange(id, name, value) { //TODO add ability to add row
    //     // const {name, value} = event.target
    //     // const index = parseInt(name)
    //     // const newGuides = this.state.guides.map((guide, i) => {
    //     //     return(i === index ? value : guide)
    //     // });
    //     this.setState({ [id]: value })
    // }

    render() {
        // console.log(this.state.week.rows)
        return (
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th><button onClick={this.updateSchedule}>Click me</button></th>
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
                                rowIndex={index}
                                row={row}
                                saveChanges = {this.saveChanges}
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
