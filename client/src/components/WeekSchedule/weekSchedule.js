import React, { Component } from "react";
import Row from '../Row';
const moment = require('moment')

const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

class WeekSchedule extends Component {
    state = {
        rows: [
            {
                time: '9:15',
                type: 'Section IV',
                days: [{
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

    populateDates(week, year) { //returns an array with each date of the given week (e.g. 1-Jul, 2-Jul, 3-Jul, etc.)
        const date = moment(week + ' ' + year, "w-YYYY").format('D-MMM')
        let dateArray = []
        for (let i = 0; i < 7; i++) {
            dateArray.push(moment(date).add(i, 'day').format('D-MMM'))
        }
        return dateArray //TODO ensure these are the proper dates (week starts on sunday vs monday)
    }


    render() {
        return (
            <table>
                <tr>
                    <th></th>
                    {dayArray.map(day => <th>{day}</th>)}
                </tr>
                <tr>
                    <th></th>
                    {this.populateDates(this.props.week, this.props.year).map(date => <th>{date}</th>)}
                </tr>
                {this.state.rows.map(row => <Row row = {row}/>)}
                <tr>

                </tr>
            </table >
        )
    }

}

// function WeekSchedule(props) {
//     const date = moment((props.week) + ' ' + props.year, "w-YYYY").format('D-MMM')
//     const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//     let dateArray = []
//     for(let i = 0; i < 7; i++){
//         dateArray.push(moment(date).add(i,'day').format('D-MMM'))
//     }

// return (
//     <table>
//         <tr>
//             <th></th>
//             {dayArray.map(day => <th>{day}</th>)}
//         </tr>
//         <tr>
//             <th></th>
//             {dateArray.map(date => <th>{date}</th>)}
//         </tr>
//         {props.rows.map(row => {
//             return (
//                 <tr>
//                     <RowType
//                         time={row.time}
//                         type={row.type}
//                     />
//                     {row.days.map(day => {
//                         return (
//                             <RowDetail
//                                 numGuests={day.numGuests}
//                                 guides={day.guides}
//                             />
//                         )
//                     })}
//                 </tr>
//             )
//         })}
//         <tr>

//         </tr>
//     </table>
// )


// }

export default WeekSchedule;
