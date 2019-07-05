import React from "react";

function Months(props) {


    return (
        <div>
            <br/>
            <button onClick={() => props.handleClick('month', props.month)}>
                {props.monthNames[props.month - 1]}
            </button>
        </div >
    )


}

export default Months;
