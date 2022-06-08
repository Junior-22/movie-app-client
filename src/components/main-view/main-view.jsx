import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./main-view.scss";

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { NavbarView } from "../navbar-view/navbar-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";


export class MainView extends React.Component {

  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
      user: null,
      favourites: []
    };
  }

  getMovies(token) {
    axios.get("https://movies2022app.herokuapp.com/movies", {
      headers: { Authorization: "Bearer " + token }
    })
      .then(response => {
        // Assign result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getUser() {
    let username = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    axios.get(`https://movies2022app.herokuapp.com/users/${username}`, {
      headers: { Authorization: "Bearer " + token }
    }).then(response => {
      this.setState({
        favourites: response.data.FavouriteMovies
      });
    })
  }

  // persist log in data in the browser
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.getUser()
      this.setState({
        user: localStorage.getItem("user")
      });
      this.getMovies(accessToken);
    }
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  /* Store data in client's browser, so not required to log in again */
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token"),
      localStorage.removeItem("user");
    this.setState({
      user: null
    });
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
    const { movies, user, favourites } = this.state;

    return (
      <Router>
        <NavbarView user={user} />
        <Row className="main-view justify-content-md-center">

          <Route exact path="/" render={() => {
            // if no user, LoginView is rendered. if user, user details are passed as a prop to the LoginView
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            // Before movies are loaded
            if (movies.length === 0) return <div className="main-view" />;

            return movies.map(m => (
              <Col md={3} key={m._id}>
                <MovieCard movieData={m} favourites={favourites} addMovieToFavourites={this.addMovieToFavourites} />
              </Col>
            ))
          }} />

          <Route path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <Col lg={8} md={8}>
              <RegistrationView />
            </Col>
          }} />

          <Route path="/movies/:movieId" render={({ match, history }) => {
            // if no user, LoginView is rendered. if user, user details are passed as a prop to the LoginView
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            // Before movies are loaded
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <MovieView movieData={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route exact path="/genre/:genreName/:movieTitle" render={({ match, history }) => {
            // if no user, LoginView is rendered. if user, user details are passed as a prop to the LoginView
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            // Before movies are loaded
            if (movies.length === 0) return <div className="main-view" />;

            return <Col md={8}>
              <GenreView movie={movies.find(m => m.Title === match.params.movieTitle)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route exact path="/director/:name/:movieTitle" render={({ match, history }) => {
            // if no user, LoginView is rendered. if user, user details are passed as a prop to the LoginView
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            // Before movies are loaded
            if (movies.length === 0) return <div className="main-view" />;

            return <Col md={8}>
              <DirectorView movie={movies.find(m => m.Title === match.params.movieTitle)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path={`/users/${user}`} render={({ match, history }) => {
            // if no user, LoginView is rendered. if user, user details are passed as a prop to the LoginView
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            // Before movies are loaded
            if (movies.length === 0) return <div className="main-view" />;

            return <Col>
              <ProfileView movies={movies} user={user} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path={`/user-update/${user}`} render={({ match, history }) => {
            // if no user, LoginView is rendered. if user, user details are passed as a prop to the LoginView
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            // Before movies are loaded
            if (movies.length === 0) return <div className="main-view" />;

            return <Col>
              <UserUpdate user={user} onBackClick={() => history.goBack()} />
            </Col>
          }} />

        </Row>
      </Router>
    );
  }
}




// registration for testing
//if (!registered) return <RegistrationView onRegister={(registered) => this.onRegister(registered)} />;

/* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
//if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

// Before the movies have been loaded
//if (movies.length === 0) return <div className="main-view" />;

//return (
//<Container>
//<Row>
//<NavbarView user={user} />
//</Row>
//<Row className="main-view justify-content-md-center">
{/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/ }
          /*{selectedMovie
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
<button onClick={() => { this.onLoggedOut() }}>Logout</button>
</Row>
</Container>
); */

