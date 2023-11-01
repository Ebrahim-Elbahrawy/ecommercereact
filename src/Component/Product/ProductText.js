import React from "react";
import { Row, Col } from "react-bootstrap";
import ViewProductsDetailsHook from "./../../hook/products/view-products-details-hook";
import { useParams } from "react-router-dom";
import AddProductCartHook from "../../hook/cart/add-product-cart-hook";
import { ToastContainer } from "react-toastify";
const ProductText = () => {
  const { id } = useParams();
  const [item, , cat, brand] = ViewProductsDetailsHook(id);
  const [colorClick, indexColor, handleAddProductToCart] =
    AddProductCartHook(id);
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
            <div className="cat-rate d-inline mx-3">
              {item.ratingsAverage ? item.ratingsAverage : null}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => (
                <div
                  key={index}
                  className="color ms-3 "
                  onClick={() => colorClick(index, color)}
                  style={{
                    backgroundColor: color,
                    border: indexColor === index ? "3px solid #ddd" : "none",
                    padding: indexColor === index ? "15px" : "0px",
                    transform: `scale(${indexColor === index ? 1.5 : 1})`,
                  }}
                ></div>
              ))
            : null}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {item.priceAfterDiscount >= 1 ? (
              <>
                {" "}
                <span>{item.priceAfterDiscount} بدلا من </span>
                <span className="text-with-line">{item.price}</span>
                <span className="card-currency mx-1 text-danger">جنيه</span>
              </>
            ) : (
              <>
                <span>{item.price}</span>
                <span className="card-currency mx-1 text-danger">جنيه</span>
              </>
            )}
          </div>
          <div
            className="product-cart-add px-3 py-3 d-inline mx-3"
            onClick={handleAddProductToCart}
          >
            اضف للعربة
          </div>
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
};

export default ProductText;
