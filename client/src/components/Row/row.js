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
                    rowIndex = {this.props.rowIndex}
                    saveChanges = {this.props.saveChanges}
                />
                {this.state.row.days.map((day, index) => {
                    return (
                        <RowDetail
                            key={day}
                            rowIndex = {this.props.rowIndex}
                            dayIndex={index}
                            numGuests={day.numGuests}
                            guides={day.guides}
                            saveChanges = {this.props.saveChanges}
                        />
                    )
                })}
                <td>
                    <button className = 'deleteRow'>Delete Row</button>
                    <button className = 'addRow'>Add Row</button>
                </td>
            </tr>
        )
    }
}

export default Row;
