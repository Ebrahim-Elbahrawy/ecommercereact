import React from "react";
import { Row, Col } from "react-bootstrap";

const UserAllOrderCard = ({ order }) => {
  console.log(order);
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="4" md="2" className="d-flex justify-content-between">
          <img
            width="93px"
            height="120px"
            src={`https://backendecommerce2.onrender.com/products/${order.product.imageCover}`}
            alt=""
          />
        </Col>
        <Col xs="7" md="6" className="d-flex flex-column">
          <div className="d-inline pt-2 cat-title">{order.product.title}</div>
          <div className="d-inline pt-2 cat-rate me-2">
            {order.product.ratingsAverage
              ? `${order.product.ratingsAverage} stars`
              : null}
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            {" "}
            {`${order.product.ratingsQuantity}` || 0} تقييم
          </div>
          {order.color ? (
            <div
              className="color ms-3 "
              style={{
                backgroundColor: `${order.color}`,
              }}
            ></div>
          ) : null}
          <div className="mt-3">
            <div className="cat-text  d-inline">الكميه</div>
            <input
              className="mx-2 "
              type="number"
              style={{ width: "40px", height: "25px" }}
              defaultValue={order.count}
              readOnly
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
