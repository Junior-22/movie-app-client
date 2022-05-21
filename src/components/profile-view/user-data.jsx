import React from "react";
import { Card, Row, Col } from "react-bootstrap";


export function UserData(props) {
  const { userData } = props;

  return (
    <Row>
      <Col>
        <Card>
          <Card.Title>Profile</Card.Title>
          <Card.Body>
            <p>Username: {userData.Username}</p>
            <p>Email: {userData.Email}</p>
            <p>Birthday: {userData.Birthday}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}