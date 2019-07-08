import React from "react";
import RowType from '../RowType';
import RowDetail from '../RowDetail';



function Row(props) {
    return (
        <tr>
            <RowType
                time={props.row.time}
                type={props.row.type}
            />
            {props.row.days.map(day => {
                return (
                    <RowDetail
                        numGuests={day.numGuests}
                        guides={day.guides}
                    />
                )
            })}
        </tr>
    )
}

export default Row;
