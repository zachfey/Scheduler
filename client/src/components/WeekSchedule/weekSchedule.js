import React from "react";
const moment = require('moment')

function WeekSchedule(props) {
    const date = moment((props.week) + ' ' + props.year, "w-YYYY").format('D-MMM')
    const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let dateArray = []
    for(let i = 0; i < 7; i++){
        dateArray.push(moment(date).add(i,'day').format('D-MMM'))
    }

    console.log(dateArray)
    // console.log('inside weeks!')
    return (
        <table>
            <tr>
                <th></th>
                {dayArray.map(day => <th>{day}</th>)}
            </tr>
            <tr>
                <th></th>
                {dateArray.map(date => <th>{date}</th>)}
            </tr>
        </table>
    )


}

export default WeekSchedule;
