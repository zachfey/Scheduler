import React from "react";
import { Breadcrumb } from 'react-bootstrap';
import './weeks.css'

function Weeks(props) {

    if (props.selected) {
        return (
            <Breadcrumb.Item className = 'selectedWeek' onClick={() => props.handleClick('week', props.week)}>
                Week {props.week} ({props.weekDisplayStart} - {props.weekDisplayEnd})
            </Breadcrumb.Item>
        )
    } else {
        return (
            <Breadcrumb.Item onClick={() => props.handleClick('week', props.week)}>
                Week {props.week} ({props.weekDisplayStart} - {props.weekDisplayEnd})
            </Breadcrumb.Item>
        )
    }


}

export default Weeks;
