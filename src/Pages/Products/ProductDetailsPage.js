import React from "react";
import CaragoryHeader from "../../Component/Catagory/CatagoryHeader";
import { Container, Spinner } from "react-bootstrap";
import ProductDetails from "./../../Component/Product/ProductDetails";
import RateContainer from "../../Component/Rate/RateContainer";
import ProductCardContainer from "./../../Component/Product/ProductCardContainer";
import ViewProductsDetailsHook from "../../hook/products/view-products-details-hook";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  const [item, , , , sameProducts, loading] = ViewProductsDetailsHook(id);

  if (item) {
    var rateAvg = item.ratingsAverage;
    var rateQty = item.ratingsQuantity;
  }
  return (
    <div style={{ minHeight: "670px" }}>
      {loading === true ? (
        <Spinner animation="border" />
      ) : loading === false ? (
        <>
          <CaragoryHeader />
          <Container>
            <ProductDetails />
            <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
            <ProductCardContainer
              title="منتجات قد تعجبك "
              btntitle=""
              pathText="/product"
              items={sameProducts}
            />
          </Container>
        </>
      ) : null}
    </div>
  );
}

export default ProductDetailsPage;
