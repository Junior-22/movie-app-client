import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { UserData } from "./user-data";
import { UpdatedUser } from "./update-user";
import { FavouriteMovies } from "./favourite-movies";

export function ProfileView(props) {
  console.log(props)

  const [userData, setUserData] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [favouriteMoviesList, setFavouriteMoviesList] = useState([]);

  let token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  const getUserData = (cancelToken, Username) => {
    axios.get(`https://movies2022app.herokuapp.com/users/${Username}`, {
      cancelToken: cancelToken
    })
      .then(response => {
        setUserData(response.data);
        setUpdatedUser(response.data);
        setFavouriteMoviesList(props.movies.filter(m => response.data.FavouriteMovies.includes(m._id)));
        //setFavouriteMoviesList(response.data.FavouriteMovies);
        console.log("these are the", favouriteMoviesList)
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    let source = axios.CancelToken.source();

    if (token !== null) {
      getUserData(source.token, props.user);
    } else {
      console.log("not authorised");
    }

    return () => {
      source.cancel();
    }
  }, []);

  const handleSubmit = (e) => {
    const Username = userData.Username
    e.preventDefault();
    axios.put(`https://movies2022app.herokuapp.com/users/${Username}`, updatedUser)
      .then(response => {
        setUserData(response.data);
        alert("profile updated");
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleUpdate = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });
  }

  const deleteProfile = (e) => {
    axios.delete(`https://movies2022app.herokuapp.com/users/${Username}`)
      .then(response => {
        alert("account deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.open("/", "_self");
      })
      .catch(error => {
        console.log("error");
      });
  }

  const removeFav = (id) => {
    axios.delete(`https://movies2022app.herokuapp.com/users/${Username}/movies/${movieData._id}`)
      .then(() => {
        // change FavouriteMovieList state and render component
        setFavouriteMoviesList(favouriteMoviesList.filter(movie => movie._id != id));
      })
      .catch(error => {
        console.log("error");
      });
  }


  return (
    <Container>
      <Row>
        <Col>

          <UserData userData={userData} />

          <FavouriteMovies favouriteMoviesList={favouriteMoviesList} removeFav={removeFav} />

          <UpdatedUser updatedUser={updatedUser} handleSubmit={handleSubmit} handleUpdate={handleUpdate} />

          <div>
            <Nav.Link href="/">back to movies</Nav.Link>
          </div>

          <div>
            <Button variant="primary" type="submit" onClick={deleteProfile}>Delete Account</Button>
          </div>

        </Col>
      </Row>
    </Container>
  );
}