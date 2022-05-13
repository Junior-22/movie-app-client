import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";

// display movies rendered on MainView
export class MovieCard extends React.Component {
  render() {
    const { movieData, onMovieClick } = this.props;

    return (
      <Card className="movie-card" id="movie-card">
        <Card.Img variant="top" src={movieData.ImagePath} crossorigin="true" />
        <Card.Body>
          <Card.Title id="movie-title">{movieData.Title}</Card.Title>
          <Card.Text id="movie-description">{movieData.Description}</Card.Text>
          <Button onClick={() => onMovieClick(movieData)} variant="link">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

// setting up default values for MovieCard properties
// ensuring values are strings and required
MovieCard.propTypes = {
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

  onMovieClick: PropTypes.func.isRequired
};