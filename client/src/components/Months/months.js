import React from "react";

function Months(props) {


    return (
        <div>
            <br/>
            <button onClick={() => props.handleClick('month', props.month)}>
                Month: {props.month}
            </button>
        </div >
    )


}

export default Months;
