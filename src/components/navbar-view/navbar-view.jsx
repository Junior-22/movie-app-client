import React from "react";
import { Navbar, Container, Nav, Button, Form, FormControl, Offcanvas } from "react-bootstrap";

import "./navbar-view.scss";

export function NavbarView(user) {

  return (
    <Navbar id="navbar" fixed="top">
      <Container id="navbar-container">
        <Navbar.Brand id="navbar-brand" href="#">Movie-app</Navbar.Brand>
        <Nav id="nav" className="me-auto">
          <Nav.Link id="nav-link" href="#home">Home</Nav.Link>
          <Nav.Link id="nav-link" href="#features">Features</Nav.Link>
          <Nav.Link id="nav-link" href="#register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
