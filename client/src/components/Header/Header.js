import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../images/Raft1Logo.png'

function Header(props) {
  // console.log('nav props', props)
  return (

    //     <Navbar bg="primary" variant="dark">

    //       <Navbar.Brand href="/">
            
    //       </Navbar.Brand>

    //           {/* <p>Raft One Scheduler</p>



    // <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>

    //     </Navbar>

    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home">
      <img
              src={logo}
              height='75px'
              className="d-inline-block align-top"
              alt="Raft1 logo"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item></Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
        <Nav>
          {props.user ?
            (
              <Navbar.Brand>
                Signed in as {props.user}. <button className = 'sign-out' onClick={props.logOut}>Sign Out?</button>
              </Navbar.Brand>
            )
            :
            <br/>
          } 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
