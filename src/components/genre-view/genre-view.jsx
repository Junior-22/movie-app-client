import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

import "./genre-view.scss";

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card className="genre-view" id="genre-view">
              <Card.Body>
                <Card.Img className="movie-poster" id="movie-poster" variant="top" src={genre.ImagePath} crossOrigin="true" />
                <Card.Title id="movie-title">{genre.Title}</Card.Title>
                <Card.Text className="movie-genre" id="movie-genre"> Genre: {genre.Genre.Name}</Card.Text>
              </Card.Body>
            </Card>

            <Button id="genre-view-button" onClick={() => { onBackClick(null); }}>Back</Button>

          </Col>
        </Row>
      </Container>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired
};