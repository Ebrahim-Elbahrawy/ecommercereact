import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProductsContainer from "../../Component/Product/ProductCardContainer";
import Pagination from "../../Component/utility/Pagination";

import { useParams } from "react-router-dom";
import ViewProductCategoryHook from "../../hook/products/view-product-category-hook";
function ProductByCategory() {
  const id = useParams();

  const [, items, getpage, pageCount] = ViewProductCategoryHook(id.id);
  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductsContainer title="" btntitle="" items={items} />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getpage} />
        ) : null}
      </Container>
    </div>
  );
}

export default ProductByCategory;
