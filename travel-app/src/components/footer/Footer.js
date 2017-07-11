import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">&copy; Travel is fun</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Facebook</NavItem>
            <NavItem eventKey={2} href="#">Twitter</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Footer ;
