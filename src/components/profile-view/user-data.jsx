import React from "react";
import { Card, Row, Col } from "react-bootstrap";


export function UserData(props) {
  const userdata = props.userdata

  return (
    <Row>
      <Col>
        <Card>
          <Card.Title>Profile</Card.Title>
          <Card.Body>
            <p>Username: {userdata.Username}</p>
            <p>Email: {userdata.Email}</p>
            <p>Birthday: {userdata.Birthday}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}