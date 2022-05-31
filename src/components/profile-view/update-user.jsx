import React from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import "./update-user.scss"

export function UpdatedUser(props) {

  const { handleSubmit, handleUpdate, userData } = props;

  return (
    <Row>
      <Col>
        <Card id="update-user">
          <Card.Title id="title">Update Profile</Card.Title>
          <Form>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="Username"
                //defaultValue={userData.Username}
                onChange={e => handleUpdate(e)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="Password"
                placeholder="new password required"
                onChange={e => handleUpdate(e)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="Email"
                //defaultValue={userData.Email}
                onChange={e => handleUpdate(e)} />
            </Form.Group>

            <Button id="update-user-button" variant="primary" type="submit" onClick={handleSubmit}>Update</Button>

          </Form>
        </Card>
      </Col>
    </Row>
  );
}