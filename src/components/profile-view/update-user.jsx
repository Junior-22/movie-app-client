import React from "react";
import { Button, Card, Form } from "react-bootstrap";


export function UpdatedUser(props) {
  const user = props.userdata
  const { handleSubmit, handleUpdate } = props;

  return (
    <Row>
      <Col>
        <Card>
          <Card.Title>Update Profile</Card.Title>
          <Form>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="Username"
                defaultValue={user.Username}
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
                defaultValue={user.Email}
                onChange={e => handleUpdate(e)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>Update</Button>

          </Form>
        </Card>
      </Col>
    </Row>
  )
}