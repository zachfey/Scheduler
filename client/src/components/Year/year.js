import React from 'react';

const Year = (props) => {
    // console.log(props)
    return (
        <div>
            <br />
            <button onClick={() => props.handleClick('year', props.year)}>
                year: {props.year}
            </button>
        </div>
    )
}

export default Year;