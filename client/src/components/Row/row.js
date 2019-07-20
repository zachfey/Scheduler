import React, { Component } from "react";
import RowType from '../RowType';
import RowDetail from '../RowDetail';
import '../table.css';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faTimes} from '@fortawesome/free-solid-svg-icons'
import './row.css'


class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row || {}
        }
        // this.handleChange = this.handleChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    addRow(){
        this.props.addrow(this.props.rowindex);
    }

    deleteRow(){
        this.props.deleterow(this.props.rowindex);
    }

    render() {
        return (
            <tr className='border_bottom'>
                <RowType
                    key={this.state.row}
                    time={this.state.row.time}
                    type={this.state.row.type}
                    rowindex={this.props.rowindex}
                    saveChanges={this.props.saveChanges}
                />
                {this.state.row.days.map((day, index) => {
                    return (
                        <RowDetail
                            key={day}
                            rowindex={this.props.rowindex}
                            dayindex={index}
                            numguests={day.numGuests}
                            guides={day.guides}
                            saveChanges={this.props.saveChanges}
                        />
                    )
                })}
                <td className='data tableFunctions'>
                    <FontAwesomeIcon 
                        icon = {faTimes} 
                        pull = 'right'
                        onClick = {this.deleteRow}
                    />
                    <br />
                    <FontAwesomeIcon 
                        icon = {faPlus} 
                        pull = 'right'
                        onClick = {this.addRow}
                    />
                </td>
            </tr>
        )
    }
}

export default Row;
