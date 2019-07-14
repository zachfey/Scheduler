import React, { Component } from "react";
import '../table.css';
import API from '../../utils/API'

class RowType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'type',
            time: props.time,
            type: props.type
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this)
    }

    
    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    // handleChange(event) {
    //     const {name, value} = event.target
    //     // this.setState({[name]: value})
    //     this.props.handleChange(this.props.rowIndex, 'type', name, value)
    // }


    saveChanges() {
        this.props.saveChanges(this.props.rowIndex, this.state)
    }

    render() {
        const time = this.state.time;
        const type = this.state.type;
        return (
            <td>
                <input
                    value={time}
                    name = 'time'
                    onChange = {this.handleChange}
                />
                <input
                    value={type}
                    name = 'type'
                    onChange = {this.handleChange}
                />
                <button 
                    className = 'saveChanges'
                    onClick = {this.saveChanges}
                >Save</button>
            </td>
        )


    }
}

export default RowType; 
