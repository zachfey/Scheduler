import React, { Component } from "react";
import '../table.css';
import { Button, Col } from 'react-bootstrap'

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
            <Col className = {this.state.edited ? 'edited data' : 'original data'}>
                <input
                    value={time}
                    name = 'time'
                    onChange = {this.handleChange}
                />
                <br/>
                <input
                    value={type}
                    name = 'type'
                    onChange = {this.handleChange}
                />
                <br/>
                {this.state.edited?
                <Button 
                    className = 'saveChanges'
                    onClick = {this.saveChanges}
                >Save</Button>
                :
                <br/>
                }
            </Col>
        )


    }
}

export default RowType; 
