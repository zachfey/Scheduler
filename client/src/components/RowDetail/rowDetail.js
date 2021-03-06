import React, { Component } from "react";
import '../table.css';
import { Button, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class RowDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'detail',
            rowIndex: props.rowindex,
            dayIndex: props.dayindex,
            numGuests: props.numguests || '',
            guides: props.guides,
            edited: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleArrayChange = this.handleArrayChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.addSubtractRows = this.addSubtractRows.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    componentDidMount() {
        this.addSubtractRows()
    }

    componentDidUpdate() {
        this.addSubtractRows()
    }

    addSubtractRows() {
        let newGuides = this.state.guides;
        if (newGuides.slice(-1)[0] !== '' && newGuides.slice(-2)[0] !== '') {
            newGuides.push('')
            console.log('addsubtractrows update state top')
            this.setState({ guides: newGuides })
        } else { //if the last spot is empty
            if (newGuides.slice(-2)[0] === '' && newGuides.length > 1) { //check if the second to last spot is empty
                console.log('second to last empty', newGuides.slice(-2)[0])
                newGuides.pop()
                console.log('addsubtractrows update state')
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
        this.setState({ guides: newGuides, edited: true })
    }

    saveChanges() {
        if (this.state.edited) {
            this.props.saveChanges(this.state, () => this.setState({ edited: false }))
        }
    }

    deleteRow(rowIndex){
        this.props.deleterow(this.props.rowindex);
    }

    render() {
        const guides = this.state.guides
        const deleteButton = (<FontAwesomeIcon
            key={'delete' + this.props.rowindex}
            icon={faTimes}
            pull='right'
            onClick={this.deleteRow}
            className='deleteButton'
        />)


        return (
            < Col className={this.state.edited ? 'edited data' : 'original data'} align='center' key={'td' + this.props.rowindex + this.props.dayindex}>

                <h4>Num Guests {this.props.dayindex === 6 ? deleteButton : ''}</h4>
                <input
                    key={'numGuests' + this.props.rowindex + this.props.dayindex}
                    value={this.state.numGuests}
                    name="numGuests"
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <h4>Guides</h4>
                {
                    guides.map((guide, index) => {
                        return (
                            <React.Fragment key={'fragment' + this.props.rowindex + this.props.dayindex + index}>
                                <input
                                    key={'guide' + this.props.rowindex + this.props.dayindex}
                                    value={guide}
                                    name={index}
                                    onChange={this.handleArrayChange}
                                />
                                <br key={'br' + + this.props.rowindex + this.props.dayindex} />
                            </React.Fragment>
                        )
                    })
                }
                {this.state.edited ?
                    <React.Fragment>
                        <br />
                        <br />
                        <Button
                            className='saveChanges'
                            onClick={this.saveChanges}
                        >Save</Button>
                    </React.Fragment>
                    :
                    <br />
                }
            </Col >
        )
    }
}

export default RowDetail;
