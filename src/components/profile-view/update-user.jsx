import React from "react";
import moment from "moment";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import "./update-user.scss"

export function UpdatedUser(props) {
  // console.log("UpdatedUser: ", props)

  const { handleSubmit, handleUpdate, updatedUser } = props;

  return (
    <Row>
      <Col>
        <Card id="update-user">
          <Card.Body>
            <Card.Title id="title">Update Profile</Card.Title>
            <Form>

              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="Username"
                  defaultValue={updatedUser.Username}
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
                  defaultValue={updatedUser.Email}
                  onChange={e => handleUpdate(e)} />
              </Form.Group>

              <Form.Group controlId="formBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  type="date"
                  name="Birthday"
                  format="dd-mm-yyyy"
                  defaultValue={moment(updatedUser.Birthday).format("YYYY-MM-DD")}
                  onChange={e => handleUpdate(e)} />
              </Form.Group>

              <Button id="update-user-button" variant="primary" type="submit" onClick={handleSubmit}>Update</Button>

            </Form>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  );
}