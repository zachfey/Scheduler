import React, { Component } from "react";
import RowType from '../RowType';
import RowDetail from '../RowDetail';
// import '../table.css';
import { Row } from 'react-bootstrap';
// import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
// import './rowData.css'


class rowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row || {}
        }
        // this.handleChange = this.handleChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    addRow() {
        this.props.addrow(this.props.rowindex);
    }

    deleteRow() {
        this.props.deleterow(this.props.rowindex);
    }

    render() {
        return (
            <Row key = {this.props.rowindex + 'tr'}>
                <RowType
                    key={this.props.rowindex + 'mainRow'}
                    time={this.state.row.time}
                    type={this.state.row.type}
                    rowindex={this.props.rowindex}
                    saveChanges={this.props.saveChanges}
                />
                {this.state.row.days.map((day, index) => {
                    return (
                        <RowDetail
                            key={index + this.props.rowindex}
                            rowindex={this.props.rowindex}
                            dayindex={index}
                            numguests={day.numGuests}
                            guides={day.guides}
                            saveChanges={this.props.saveChanges}
                        />
                    )
                })}
                {/* <Col className='data tableFunctions'>
                    <FontAwesomeIcon
                        key={'delete' + this.props.rowIndex}
                        icon={faTimes}
                        pull='right'
                        onClick={this.deleteRow}
                    />
                    <br />
                    <FontAwesomeIcon
                        key={'add' + this.props.rowIndex}
                        icon={faPlus}
                        pull='right'
                        onClick={this.addRow}
                    />
                </Col> */}
            </Row>
        )
    }
}

export default rowData;
