import React, { Component } from "react";
import RowType from '../RowType';
import RowDetail from '../RowDetail';
import { Row } from 'react-bootstrap';


class rowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row || {}
        }
        // this.handleChange = this.handleChange.bind(this);
        this.addRow = this.addRow.bind(this);
        // this.deleteRow = this.deleteRow.bind(this);
    }

    addRow() {
        this.props.addrow(this.props.rowindex);
    }

    render() {
        return (
            <React.Fragment>
                <Row key={this.props.rowindex + 'tr'} className = 'dataRow'>
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
                                deleterow={this.props.deleterow}
                            />
                        )
                    })}
                    
                </Row>
                <Row className='addRow' onClick={this.addRow}>

                </Row>
            </React.Fragment>
        )
    }
}

export default rowData;
