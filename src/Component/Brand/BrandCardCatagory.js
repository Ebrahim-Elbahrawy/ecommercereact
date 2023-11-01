import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../utility/SubTitle";
import BrandCard from "./BrandCard";
import Spinner from "react-bootstrap/Spinner";
import HomeBrandPageHook from "../../hook/brand/home-brand-page-hook";
function BrandCardCatagory({ title, btntitle, pathText }) {
  const [brand, loading] = HomeBrandPageHook();
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row className="my-2 d-flex justify-content-between">
          {loading === false && brand.data ? (
            brand.data
              .slice(0, 4)
              .map((item, index) => <BrandCard key={index} img={item.image} />)
          ) : (
            <h1>لايوجد تصنيفات </h1>
          )}
        </Row>
      )}
    </Container>
  );
}

export default BrandCardCatagory;
