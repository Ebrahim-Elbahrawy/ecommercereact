import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../utility/SubTitle";
import ProductCard from "./ProductCard";
import CardContainerHook from "../../hook/products/card-container-hook";

function ProductCardContainerPrefe({ title, btntitle, pathText, items }) {
  const [favProd] = CardContainerHook();
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-start">
        {items
          ? items.map((items, index) => (
              <ProductCard items={items} key={index} favArr={favProd} />
            ))
          : null}
      </Row>
    </Container>
  );
}

export default ProductCardContainerPrefe;
