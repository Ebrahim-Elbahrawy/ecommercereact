import React from "react";
import { Col, Row, Button } from "react-bootstrap";

import deleteicon from "../../images/delete.png";
import ClearProductUserHook from "../../hook/cart/clear-product-cart-hook";

const CartItem = ({ items }) => {
  const [, , handleRemoveCart, onChangeCount, handleUpdate, itemCount] =
    ClearProductUserHook(items);
  return (
    <Col xs="12" className="cart-item-body mt-5 d-flex  ">
      <img
        width="160px"
        height="197px"
        src={`http://127.0.0.1:8000/products/${items.product.imageCover}`}
        alt=""
        className="ps-3 ms-2 "
      />
      <div className="w-100">
        <Row className="justify-content-between ">
          <Col
            sm="12"
            className=" d-flex flex-row justify-content-between ps-3 ms-3"
          >
            <div className="d-inline pt-2 cat-text">
              {items.product.category.name}
            </div>
            <div
              className="d-flex pt-2 "
              style={{ cursor: "pointer" }}
              onClick={handleRemoveCart}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">{items.product.title}</div>
            {/* <div className="d-inline pt-2 cat-rate me-2">4. 5</div> */}
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {" "}
              {items.product.brand.name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {items.color ? (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: items.color }}
              ></div>
            ) : null}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text  d-inline mt-2">الكميه</div>
              <input
                value={itemCount}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "35px" }}
                onChange={onChangeCount}
              />
              <Button className="btn btn-dark" onClick={handleUpdate}>
                تطبيق الكمية{" "}
              </Button>
            </div>
            <div className="d-inline pt-2 barnd-text"> {items.price}</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
