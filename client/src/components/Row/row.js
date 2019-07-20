import React, { Component } from "react";
import RowType from '../RowType';
import RowDetail from '../RowDetail';
import '../table.css';


class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row || {}
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <tr className='border_bottom'>
                <RowType
                    key = {this.state.row}
                    time={this.state.row.time}
                    type={this.state.row.type}
                    rowindex = {this.props.rowindex}
                    saveChanges = {this.props.saveChanges}
                />
                {this.state.row.days.map((day, index) => {
                    return (
                        <RowDetail
                            key={day}
                            rowindex = {this.props.rowindex}
                            dayindex={index}
                            numguests={day.numGuests}
                            guides={day.guides}
                            saveChanges = {this.props.saveChanges}
                        />
                    )
                })}
                <td>
                    <button className = 'deleteRow' rowindex = {this.props.rowindex}>Delete Row</button>
                    <button className = 'addRow' rowindex = {this.props.rowindex}>Add Row</button>
                </td>
            </tr>
        )
    }
}

export default Row;
