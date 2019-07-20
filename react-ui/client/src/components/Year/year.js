import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Year = (props) => {
    // console.log(props)
    return (
        <React.Fragment>
            <Breadcrumb.Item onClick={() => props.handleClick('year', props.year)}>
                {props.year}
            </Breadcrumb.Item>
        </React.Fragment>
    )
}

export default Year;