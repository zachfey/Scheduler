import React, { Component } from "react";
import '../table.css';

class RowDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'detail',
            numGuests: props.numGuests,
            guides: props.guides
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this)
    }

    componentDidMount() {
        let newGuides = this.state.guides;
        if (newGuides.slice(-1)[0] !== '') {
            newGuides.push('')
            this.setState({ guides: newGuides })
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleArrayChange(event) { //TODO add ability to add row
        const { name, value } = event.target
        const index = parseInt(name)
        const newGuides = this.state.guides.map((guide, i) => {
            return (i === index ? value : guide)
        });
        // this.props.onArrayChange(this.props.id, 'guides', newGuides)
        this.setState({ guides: newGuides })
    }

    // handleChange(event) {
    //     const {name, value} = event.target
    //     this.props.onChange(this.props.rowIndex, 'detail', name, value, this.props.dayIndex)
    // }

    // handleArrayChange(event) { //TODO add ability to add row
    //     const {name, value} = event.target
    //     const index = parseInt(name)
    //     const newGuides = this.state.guides.map((guide, i) => {
    //         return(i === index ? value : guide)
    //     });
    //     this.props.onArrayChange(this.props.id, 'guides', newGuides)
    //     // this.setState({ guides: newGuides })
    // }

    saveChanges() {
        this.props.saveChanges(this.props.rowIndex, this.state, this.props.dayIndex)
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
                <button
                    className='saveChanges'
                    onClick={this.saveChanges}
                >Save</button>
            </td >
        )
    }
}

export default RowDetail;
