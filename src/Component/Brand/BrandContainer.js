import React from "react";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
function BrandContainer({ data }) {
  return (
    <Container>
      <h2 className="admin-content-text mt-3">اشهر الماركات</h2>
      <Row className="my-1 d-flex justify-content-between">
        {data.map((item, index) => (
          <BrandCard key={index} img={item.image} />
        ))}
      </Row>
    </Container>
  );
}

export default BrandContainer;
