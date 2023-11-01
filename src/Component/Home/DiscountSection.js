import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptops from "../../images/laptops.png";

function DiscountSection() {
  return (
    <Container>
      <Row className="discount-backcolor my-3 mx-2 text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            خصم يصل الى 30% على اجهاذة الاب توب
          </div>
        </Col>
        <Col sm="6">
          <img src={laptops} alt="not found" className="dicount-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default DiscountSection;
