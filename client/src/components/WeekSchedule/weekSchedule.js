import React, { Component } from "react";
import Row from '../Row';
const moment = require('moment')

const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

class WeekSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = { //TODO change this from state to database query
            rows: [
                {
                    time: '9:15',
                    type: 'Section IV',
                    days: [{
                        numGuests: 22,
                        guides: ['Linc', 'Yook', 'Merry', 'Hunter', '']
                    },
                    {
                        numGuests: 12,
                        guides: ['Sarah', 'Geoff P']
                    },
                    {
                        numGuests: null,
                        guides: []
                    },
                    {
                        numGuests: 13,
                        guides: []
                    },
                    {
                        numGuests: 14,
                        guides: []
                    },
                    {
                        numGuests: 15,
                        guides: []
                    },
                    {
                        numGuests: 16,
                        guides: []
                    }
                    ]
                },
                {
                    time: '11:30',
                    type: 'Section III',
                    days: []
                }
            ]
        }

        // this.handleChange = this.handleChange.bind(this)
    }


    populateDates(week, year) { //returns an array with each date of the given week (e.g. 1-Jul, 2-Jul, 3-Jul, etc.)
        const date = moment(week + ' ' + year, "w-YYYY").format('D-MMM')
        let dateArray = []
        for (let i = 1; i < 8; i++) {
            dateArray.push(moment(date).add(i, 'day').format('D-MMM'))
        }
        return dateArray 
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {dayArray.map(day => <th>{day}</th>)}
                    </tr>
                    <tr>
                        <th></th>
                        {this.populateDates(this.props.week, this.props.year).map(date => <th>{date}</th>)}
                    </tr>
                    {this.state.rows.map(row => {
                        return (
                            <Row
                                row={row}
                            />
                        )
                    })}
                    <tr>

                    </tr>
                </tbody>
            </table >
        )
    }

}

export default WeekSchedule;
