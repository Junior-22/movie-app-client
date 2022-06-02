import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./favourite-movies.scss"
import "../movie-view/movie-view";


export function FavouriteMovies({ favouriteMoviesList, removeFav }) {
  // console.log("favourite-movie class: ", favouriteMoviesList);

  return (
    <Container className="col-remove-padding">
      <Row>
        <Col>
          <h3 id="title">Favourite Movies</h3>

          {favouriteMoviesList.map((movieData) => {
            return (
              <Col key={movieData._id}>
                <Card id="movie-view">
                  <Card.Img variant="top" src={movieData.ImagePath} crossOrigin="true" />
                  <Card.Body>
                    <Card.Title>{movieData.Title}</Card.Title>
                    <Card.Subtitle>{movieData.Year}</Card.Subtitle>
                    <Link to={`/movies/${movieData._id}`}>
                      <Button variant="link">Details</Button>
                    </Link>

                    <Button variant="primary" onClick={() => removeFav(movieData._id)}>Remove from favourites</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Col>

      </Row>
    </Container>
  )
}