import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SugegstProduct from "../../Component/addFolder/SugegstProduct";

function SuggestProductPage() {
  return (
    <Container>
      <div style={{ minHeight: "670px" }}>
        <Row className="py-3">
          <Col sm="9" xs="10" md="10">
            <SugegstProduct />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SuggestProductPage;
