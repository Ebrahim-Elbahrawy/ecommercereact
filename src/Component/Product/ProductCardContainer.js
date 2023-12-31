import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../utility/SubTitle";
import ProductCardHome from "./ProductCardHome";
import CardContainerHook from "../../hook/products/card-container-hook";

function ProductCardContainer({ title, btntitle, pathText, items }) {
  const [favProd] = CardContainerHook();
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-start">
        {items
          ? items.map((items, index) => (
              <ProductCardHome items={items} key={index} favArr={favProd} />
            ))
          : null}
      </Row>
    </Container>
  );
}

export default ProductCardContainer;
