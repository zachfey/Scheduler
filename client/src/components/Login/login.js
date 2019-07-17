import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }


  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  onChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('within component loggin in')
    // console.log(this.props)
    axios.post('/api/auth/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
        console.log(this.props)
          console.log('login success!')
        //   console.log(res.data)
        //   console.log('redirecting')
          this.props.logIn(res.data.username)
          this.props.history.push('/')
        }
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <form className="form-group">
        Log in
                <br />
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
