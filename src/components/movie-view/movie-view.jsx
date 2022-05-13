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
            <Card className="movie-view" id="movie-view">
              <Card.Body>
                <Card.Img className="movie-poster" id="movie-poster" variant="top" src={movieData.ImagePath} crossorigin="true" />
                <Card.Title className="movie-title" id="movie.title">{movieData.Title}</Card.Title>
                <Card.Text className="movie-year" id="movie-year"> Year: {movieData.Year}</Card.Text>
                <Card.Text className="movie-description" id="movie-description"> Description: {movieData.Description}</Card.Text>
                <Card.Text className="movie-genre" id="movie-genre"> Genre: {movieData.Genre.Name}</Card.Text>
                <Card.Text className="movie-director" id="movie-director"> Director: {movieData.Director.Name}</Card.Text>
                <Card.Text className="movie-actors" id="movie-actors"> Actors: {movieData.Actors}</Card.Text>
              </Card.Body>
            </Card>
            <Button id="movie-view-button" onClick={() => { onBackClick(null); }}>Back</Button>
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