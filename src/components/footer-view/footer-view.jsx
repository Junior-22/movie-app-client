import React from 'react';
import { Row, Navbar } from 'react-bootstrap';
import "./footer-view.scss";

export class FooterView extends React.Component {

  render() {

    let year = new Date().getFullYear();

    return (
      <Navbar collapseOnSelect expand="sm" className="footer">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <footer>
          <p id="text">MOVIE-APP © {year}</p>
        </footer>
      </Navbar>
    )
  }
}