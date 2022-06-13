import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./movie-card.scss";

// display movies rendered on MainView
export class MovieCard extends React.Component {

  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      // movies: [],
      // user: null,
      favourites: []
    };
  }

  addMovieToFavourites = (movieId) => {
    let token = localStorage.getItem("token");
    // console.log(this.state.user, movieId)
    axios.post(`https://movies2022app.herokuapp.com/users/${this.state.user}/movies/${movieId}`, {}, {
      headers: { Authorization: "Bearer " + token }
    })
      .then(response => {
        this.setState({
          favourites: this.state.favourites.concat(movieId)
        })
        alert("successfully added")
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    const { favourites } = this.state;

    const { movieData, addMovieToFavourites } = this.props;
    // console.log(favourites)

    const hideAddToFavouritesButton = favourites.find(id => id === movieData._id)

    return (
      <Card className="movie-card" id="movie-card">
        <Card.Img variant="top" src={movieData.ImagePath} crossOrigin="true" />
        <Card.Body>
          <Card.Title className="movie-title" id="movie-title">{movieData.Title}</Card.Title>
          <Card.Text className="year" id="year">{movieData.Year}</Card.Text>
          <Link to={`/movies/${movieData._id}`}>
            <Button variant="link">see more</Button>
          </Link>
          {hideAddToFavouritesButton ? "In favourites list" : <Button variant="dark" onClick={() => addMovieToFavourites(movieData._id)}>Add to Favourites</Button>}
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
    ImagePath: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }).isRequired,

  //onMovieClick: PropTypes.func.isRequired
};