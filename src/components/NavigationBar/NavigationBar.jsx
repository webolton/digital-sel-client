import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from 'assets/images/moe-icon.svg';

const NavigationBar = () => (
  <header>
    <Navbar bg="white" collapseOnSelect expand="md">

      <Navbar.Brand href="/">
        <img
          alt="The Digital SEL Logo"
          src={logo}
          className="d-inline-block navbar-logo"
        />
        {' '}
        <span className="nav-brand-complete">The Digital South English Legendary</span>
        {' '}
        {/* Larger displays */}
        <span className="nav-brand-truncated">The Digital SEL</span>
        {' '}
        {/* Smaller displays */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  </header>
);

export default NavigationBar;
