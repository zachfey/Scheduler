import React, { Component } from "react";
import axios from 'axios';
import './login.css';
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap'
import logo from '../../images/Raft1Logo.png'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      wrongPassword: false
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
          this.props.logIn(res.data.username)
          this.props.history.push('/')
        }
      }).catch(err => {
        this.setState({ wrongPassword: true })
      })
  }

  render() {
    return (
      <Container>
        <br />
        <br />
        <Row classname='loginRow'>
          <Col className='intro-column'>

            <h1 className='text-center'>Raft 1 Scheduler Portal</h1>
            <br />
            <Card.Img src={logo} fluid />
          </Col>
          <Col className='login-column'>
            <Card bg='light' >
              <Card.Body>
                <Card.Title>Log in</Card.Title>

                <Form className="form-group" >
                  <Form.Group controlID='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type='username'
                      placeholder='Username'
                      name='username'
                      value={this.state.username}
                      onChange={this.onChange} />
                  </Form.Group>
                  <Form.Group controlID='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={this.state.password}
                      onChange={this.onChange} />
                  </Form.Group>
                  {(this.state.wrongPassword) ?
                    <p className='incorrect-password'>Incorrect Password!</p>
                    :
                    <br />
                  }
                  <Button variant="primary" size="lg" block
                    onClick={this.handleSubmit}
                  >
                    Log In
                </Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
