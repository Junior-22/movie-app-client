import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

import "./director-view.scss";

export class DirectorView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card className="director-view" id="director-view">
              <Card.Body>
                <Card.Img className="movie-poster" id="movie-poster" variant="top" src={movie.ImagePath} crossOrigin="true" />
                <Card.Title id="movie-title">{movie.Title}</Card.Title>
                <Card.Text className="movie-director" id="movie-director"> Director: {movie.Director.Name}</Card.Text>
              </Card.Body>
            </Card>

            <Button id="director-view-button" onClick={() => { onBackClick(null); }}>Back</Button>

          </Col>
        </Row>
      </Container>
    );
  }
}

DirectorView.propTypes = {
  movie: PropTypes.shape({
    Name: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired
};