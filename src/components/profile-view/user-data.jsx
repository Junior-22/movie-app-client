import React from "react";
import moment from "moment";
import { Card, Row, Col } from "react-bootstrap";
import "./user-data.scss"


export function UserData(props) {
  const { userData } = props;
  // console.log("user data: ", userData)
  // const dateToFormat = userData.Birthday

  return (
    <Row>
      <Col key={userData._id}>
        <Card id="user-data">
          <Card.Title className="card-title-custom" id="title">Profile</Card.Title>
          <Card.Body id="body">
            <p>Username: {userData.Username}</p>
            <p>Email: {userData.Email}</p>
            <p>Birthday: {moment(userData.Birthday).format("DD - MM - YYYY")}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}