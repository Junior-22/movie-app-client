import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import "./navbar-view.scss";

export function NavbarView({ user }) {

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar collapseOnSelect expand="sm" id="navbar" sticky="top">
      <Container id="navbar-container">
        <Navbar.Brand id="navbar-brand" href="/">Movie-app</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav id="nav" className="ms-auto">
          {isAuth() && (
            <Nav.Link id="nav-link" href={`/users/${user}`}>{user}</Nav.Link>
          )}
          {isAuth() && (
            <Button id="nav-link" variant="link" onClick={() => { onLoggedOut() }}>Logout</Button>
          )}
          {!isAuth() && (
            <Nav.Link id="nav-link" href="/">Sign-in</Nav.Link>
          )}
          {!isAuth() && (
            <Nav.Link id="nav-link" href="/register">Sign-up</Nav.Link>
          )}
        </Nav>

      </Container>
    </Navbar>
  )
}
