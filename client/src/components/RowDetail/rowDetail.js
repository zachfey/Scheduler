import React, { Component } from "react";
import '../table.css';

class RowDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'detail',
            rowIndex: props.rowIndex,
            dayIndex: props.dayIndex,
            numGuests: props.numGuests,
            guides: props.guides,
            edited: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this)
    }

    componentDidMount() {

    }
    
    componentDidUpdate(){
        let newGuides = this.state.guides;
        if (newGuides.slice(-1)[0] !== '') {
            newGuides.push('')
            this.setState({ guides: newGuides })
        } else { //if the last spot is empty
            if (newGuides.slice(-2)[0] === ''){ //check if the second to last spot is empty
                console.log('second to last empty', newGuides.slice(-2)[0])
                newGuides.pop()
                this.setState({ guides: newGuides })
            }
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value, edited: true })
    }

    handleArrayChange(event) { //TODO add ability to add row
        const { name, value } = event.target
        const index = parseInt(name)
        const newGuides = this.state.guides.map((guide, i) => {
            return (i === index ? value : guide)
        });
        // this.props.onArrayChange(this.props.id, 'guides', newGuides)
        this.setState({ guides: newGuides, edited: true  })
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
        if(this.state.edited){
            this.props.saveChanges(this.state, () => this.setState({edited:false}))
        }
    }

    render() {
        const numGuests = this.state.numGuests
        const guides = this.state.guides
        return (
            < td  className = {this.state.edited ? 'edited' : 'original'}>
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
