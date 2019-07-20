import React, { Component } from "react";
import '../table.css';

class RowType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'type',
            rowIndex: props.rowindex,
            time: props.time,
            type: props.type,
            edited: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this)
    }

    
    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value, edited: true})
    }

    // handleChange(event) {
    //     const {name, value} = event.target
    //     // this.setState({[name]: value})
    //     this.props.handleChange(this.props.rowIndex, 'type', name, value)
    // }


    saveChanges() {
        if(this.state.edited){
            
            this.props.saveChanges(this.state, () => this.setState({edited:false}))
        }
    }

    render() {
        const time = this.state.time;
        const type = this.state.type;
        return (
            <td className = {this.state.edited ? 'edited' : 'original'}>
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
