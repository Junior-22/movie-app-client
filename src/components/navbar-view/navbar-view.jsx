import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          {/* {isAuth() && (
            <Nav.Link id="nav-link" href={`/users/${user}`}>{user}</Nav.Link>
          )} */}
          {isAuth() && (
            <Link id="nav-link" to={`/users/${user}`}>{user}</Link>
          )}
          {/* {isAuth() && (
            <Button id="nav-link" variant="link" onClick={() => { onLoggedOut() }}>Logout</Button>
          )} */}
          {isAuth() && (
            <Link id="nav-link" variant="link" onClick={() => { onLoggedOut() }}>Logout</Link>
          )}
          {/* {!isAuth() && (
            <Nav.Link id="nav-link" href="/">Sign-in</Nav.Link>
          )} */}
          {!isAuth() && (
            <Link id="nav-link" to={"/"}>Sign-in</Link>
          )}
          {/* {!isAuth() && (
            <Nav.Link id="nav-link" href="/register">Sign-up</Nav.Link>
          )} */}
          {!isAuth() && (
            <Link id="nav-link" to={`/register`}>Sign-up</Link>
          )}
          {/* <Link to={`/register`}>Sign up</Link> */}
        </Nav>

      </Container>
    </Navbar>
  )
}
