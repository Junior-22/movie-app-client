import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./main-view.scss";

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { NavbarView } from "../navbar-view/navbar-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export class MainView extends React.Component {

  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      registered: null,
      user: null
    };
  }

  componentDidMount() {
    axios.get("https://movies2022app.herokuapp.com/movies")
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  /* When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegister(registered) {
    this.setState({
      registered
    });
  }

  render() {
    const { movies, selectedMovie, user, registered } = this.state;

    // registration for testing
    //if (!registered) return <RegistrationView onRegister={(registered) => this.onRegister(registered)} />;

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Container>
        <Row>
          <NavbarView user={user} />
        </Row>
        <Row className="main-view justify-content-md-center">
          {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
          {selectedMovie
            ? (
              <Col md={8}>
                <MovieView movieData={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            )
            : movies.map(movie => (
              <Col md={3}>
                <MovieCard key={movie._id} movieData={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  }
}