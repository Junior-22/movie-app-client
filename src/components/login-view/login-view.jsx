import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://movies2022app.herokuapp.com/login", {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log("invalid user")
      });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  }; */

  const handleRegister = (e) => {
    e.preventDefault();
    props.onRegister(true);
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card className="login-view" id="login-view">
            <Card.Body>
              <Card.Title style={{ textAlign: "center", fontSize: 20 }}>Login</Card.Title>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button style={{ marginTop: 10 }} variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

// <Button variant="secondary" type="register" onClick={handleRegister}>Register</Button>
