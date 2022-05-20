import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

import "./director-view.scss";

export class DirectorView extends React.Component {

  render() {
    const { movieData, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card className="director-view" id="director-view">
              <Card.Body>
                <Card.Img className="movie-poster" id="movie-poster" variant="top" src={movieData.ImagePath} crossOrigin="true" />
                <Card.Title id="movie-title">{movieData.Title}</Card.Title>
                <Card.Text className="movie-director" id="movie-director"> Director: {movieData.Director.Name}</Card.Text>
              </Card.Body>
            </Card>

            <Button id="" onClick={() => { onBackClick(null); }}>Back</Button>

          </Col>
        </Row>
      </Container>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired
};