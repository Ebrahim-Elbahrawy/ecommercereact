import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserSideBar from "./../../Component/User/UserSideBar";
import UserAllAddress from "./../../Component/User/UserAllAddress";

function UserAddressePage() {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAllAddress />
        </Col>
      </Row>
    </Container>
  );
}

export default UserAddressePage;
