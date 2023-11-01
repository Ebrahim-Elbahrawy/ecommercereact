import React from "react";
import { Container, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
function CatagoryContainer(data) {
  const colors = [
    "#F4DBA4",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <Container>
      <h2 className="admin-content-text mt-3">كل التصنيفات</h2>
      <Row className="my-2 d-flex justify-content-between">
        {data.data.map((item, index) => (
          <CategoryCard
            key={index}
            title={item.name}
            img={item.image}
            id={item._id}
            background={colors[Math.floor(Math.random() * 5) + 1]}
          />
        ))}
      </Row>
    </Container>
  );
}

export default CatagoryContainer;
