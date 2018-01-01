import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

import logo from '../assets/logo.svg';
import { loginRoute } from './route-constants';

class NavigationBar extends Component {

  logout = () => {
    window.location.href = `/${loginRoute}`
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src={logo} className="logo" alt="logo" />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>Star Wars</NavItem>
        </Nav>
        <Nav className="pull-right">
          <NavItem onClick={this.logout}>Logout</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
