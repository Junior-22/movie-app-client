import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export function FavouriteMovies({ favouriteMoviesList, removeFav }) {
  console.log(favouriteMoviesList);
  return (
    <Container>
      <Row>
        <Col>
          <h5>Favourite Movies</h5>
        </Col>
      </Row>

      <Row>
        {favouriteMoviesList.map((movieData) => {
          return (
            <Col key={movieData._id}>
              <Card>
                <Card.Image variant="top" src={movieData.ImagePath} crossOrigin="true" />
                <Card.Body>
                  <Card.Title>{movieData.Title}</Card.Title>
                  <Card.Subtitle>{movieData.Year}</Card.Subtitle>

                  <Button variant="primary" onClick={() => removeFav(movieData._id)}>Remove from favourites</Button>
                  <Link to={`/movies/${movieData._id}`}>
                    <Button variant="link">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}