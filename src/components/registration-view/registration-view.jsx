import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, FormControl, Button, Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "./registration-view.scss";

// registration form
export function RegistrationView(props) {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [birthday, setBirthday] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegister(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card style={{ marginTop: 100, marginBottom: 50, }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center", fontSize: 20 }}>Please register</Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      placeholder="Enter a username" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      type="text"
                      value={birthday}
                      onChange={e => setBirthday(e.target.value)} />
                  </Form.Group>

                  <Button variant="primary" type="submit">Submit</Button>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}