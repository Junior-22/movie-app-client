import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

import "./movie-view.scss";

export class MovieView extends React.Component {

  render() {
    const { movieData, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card className="movie-view">
              <Card.Body>
                <Card.Img className="movie-poster" variant="top" src={movieData.ImagePath} crossorigin="true" />
                <Card.Title className="movie-title">{movieData.Title}</Card.Title>
                <Card.Year className="movie-year">{movieData.Year}</Card.Year>
                <Card.Description className="movie-description">{movieData.Description}</Card.Description>
                <Card.Genre className="movie-genre">{movieData.Genre.Name}</Card.Genre>
                <Card.Director className="movie-director">{movieData.Director.Name}</Card.Director>
                <Card.Actors className="movie-actors">{movieData.Actors}</Card.Actors>
              </Card.Body>
            </Card>
            <Button onClick={() => { onBackClick(null); }}>Back</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }).isRequired,

  onBackClick: PropTypes.func.isRequired
};