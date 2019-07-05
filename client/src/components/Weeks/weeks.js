import React from "react";

function Weeks(props) {

    // console.log('inside weeks!')
    return (
        <div>
            <br />
            <button onClick={() => props.handleClick('week', props.week)}>
                Week {props.week} ({props.weekDisplayStart} - {props.weekDisplayEnd})
            </button>
        </div>
    )


}

export default Weeks;
