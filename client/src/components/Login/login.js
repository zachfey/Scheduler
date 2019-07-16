import React, { Component } from "react";
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event) {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('within component loggin in')
        axios.post('/api/auth/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log(res)
            if(res.stats === 200) {
                console.log('login success!')
                console.log(res.data)
                this.props.updateUser({
                    loggedIn: true,
                    username: res.data.username
                })
                this.setState({
                    redirectTo: '/'
                })
            } 
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <form className="form-group">
                Log in 
                <br/>
                <label>Username:</label>
                <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.onChange}
                />
                <label>Password:</label>
                <input
                    type='text'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChange}
                />
                <button
                    onClick={this.handleSubmit}
                >
                    Submit

                </button>
            </form>
        );
    }
}

export default SignUp;
