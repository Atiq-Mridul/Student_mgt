import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";


const AppNavBar = () => {
    return (
      
        <div>
          <div>
          <h3 className='mt-3 text-center text-success font-weight-bold '>Student Database System</h3>
          </div>
        <br/>

            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><NavLink to="/">List</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/create">Create</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default AppNavBar;