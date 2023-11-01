import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Component/Catagory/CatagoryHeader";
import CardProductsContainer from "../../Component/Product/ProductCardContainer";
import Pagination from "../../Component/utility/Pagination";
import SearchCountResult from "../../Component/utility/SearchCountResult";

import SideFilter from "./../../Component/utility/SideFilter";
import ViewSearchProductsHook from "../../hook/products/view-search-product-hooh";

const ShopProductsPage = () => {
  const [items, pageCount, getpage, getProduct, lengthFromSearch] =
    ViewSearchProductsHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          title={`هناك ${lengthFromSearch} من المنتجات`}
          onClick={getProduct}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer title="" btntitle="" items={items} />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getpage} />
        ) : null}
      </Container>
    </div>
  );
};

export default ShopProductsPage;
