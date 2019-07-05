import React from "react";

function RowType(props) {

    return (
        <td>
            <p>{props.time}</p>
            <p>{props.type}</p>
        </td>
    )


}

export default RowType;
