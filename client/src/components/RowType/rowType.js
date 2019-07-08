import React, { Component } from "react";

class RowType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            type: props.type
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value})
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
            </td>
        )


    }
}

export default RowType;
