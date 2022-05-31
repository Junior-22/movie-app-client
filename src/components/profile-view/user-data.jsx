import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./user-data.scss"


export function UserData(props) {
  const { userData } = props;

  return (
    <Row>
      <Col>
        <Card id="user-data">
          <Card.Title id="title">Profile</Card.Title>
          <Card.Body id="body">
            <p>Username: {userData.Username}</p>
            <p>Email: {userData.Email}</p>
            <p>Birthday: {userData.Birthday}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}