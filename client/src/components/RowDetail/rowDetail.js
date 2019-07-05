import React from "react";

function RowDetail(props) {

    return (
        <td>
            <p>{props.numGuests}</p>
            {props.guides.map(guide => <p>{guide}</p>)}
        </td>
    )


}

export default RowDetail;
