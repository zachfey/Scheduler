import React from "react";
import { Breadcrumb } from 'react-bootstrap';

function Months(props) {


    return (
        <Breadcrumb.Item onClick={() => props.handleClick('month', props.month)}>
            {props.monthNames[props.month - 1]}
        </Breadcrumb.Item>
    )


}

export default Months;
