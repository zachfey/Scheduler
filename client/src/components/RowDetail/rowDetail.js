import React from "react";
import Input from '../Input'


function RowDetail(props) {

    return ( //TODO: Better wy to initialize the input field?
        <td>
            <input
                value={props.numGuests}
                // onChange={this.handleInputChange}
                name="numGuests"
                placeholder={props.numGuests}
            />

            {props.guides.map(guide => {
                return (
                    <input
                        value = {guide}
                    />
                )
            })}
        </td>
    )


}

export default RowDetail;
