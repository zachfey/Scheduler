import React, { Component } from "react";

class RowDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numGuests: props.numGuests,
            guides: props.guides
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
    }

    componentDidMount(){
        console.log('mounting')
        let newGuides = this.state.guides;
        console.log(newGuides.slice(-1)[0])
        if(newGuides.slice(-1)[0] !== ''){
            newGuides.push('')
            this.setState({guides: newGuides})
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleArrayChange(event) { //TODO add ability to add row
        const {name, value} = event.target
        const index = parseInt(name)
        const newGuides = this.state.guides.map((guide, i) => {
            return(i === index ? value : guide)
        });
        this.setState({ guides: newGuides })
    }

    render() {
        const numGuests = this.state.numGuests
        const guides = this.state.guides
        return (
            < td >
                <input
                    value={numGuests}
                    name="numGuests"
                    onChange={this.handleChange}
                />
                <h3>Guides</h3>
                {
                    guides.map((guide, index) => {
                        return (
                            <input
                                value={guide}
                                name={index}
                                onChange={this.handleArrayChange}
                            />
                        )
                    })
                }
            </td >
        )
    }
}

export default RowDetail;
