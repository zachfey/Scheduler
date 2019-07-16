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
        // console.log(this.state);
        axios.post('/api/auth/signup', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log(res)
            if(res.data) {
                console.log('signup success!')
                console.log(res.data)
                this.setState({redirectTo: '/login'})
            } else{
                console.log('signup error!')
            }
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <form className="form-group">
                Sign Up
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
