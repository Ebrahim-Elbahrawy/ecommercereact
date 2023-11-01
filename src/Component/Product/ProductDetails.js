import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProductGallary from "./ProductGallary";
import ProductText from "./ProductText";

function ProductDetails() {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallary />
        </Col>
        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
