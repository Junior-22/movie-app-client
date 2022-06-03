import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./favourite-movies.scss"


export function FavouriteMovies({ favouriteMoviesList, removeFav }) {
  // console.log("favourite-movie class: ", favouriteMoviesList);

  return (
    <Container className="col-remove-padding">
      <Row>
        <Col xs={12}>
          <h3 id="title">Favourite Movies</h3>
        </Col>
      </Row>
      <Row>
        {favouriteMoviesList.map((movieData) => {
          return (
            <Col xs={12} md={6} lg={3} key={movieData._id}>
              <Card id="fav-movies">
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
      </Row>


    </Container>
  )
}