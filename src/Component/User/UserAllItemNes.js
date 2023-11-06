import React from "react";
import { Row, Col } from "react-bootstrap";
// import mobile from '../../images/mobile.png'
import UserAllOrderCard from "./UserAllOrderCard";
const UserAllItemNes = ({ item }) => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">طلب رقم #{item.id}</div>
      </Row>
      {item.cartItems.length >= 1
        ? item.cartItems.map((order, index) => {
            return <UserAllOrderCard order={order} key={index} />;
          })
        : null}

      <Row className="d-flex justify-content-center ">
        <Col xs="12" className="">
          <div>
            <div className="d-inline">التوصيل</div>
            <div className="d-inline mx-2 stat">
              {item.isDelivered === false
                ? "قيد التنفيذ"
                : "تم تسليم الاورد بنجاح"}
            </div>
            <div className="d-inline">الدفع</div>
            <div className="d-inline mx-2 stat">
              {item.isPaid === false ? " لم يتم " : " تم"}
            </div>
            <div className="d-inline">طريقه الدفع</div>
            <div className="d-inline mx-2 stat">
              {item.isCash === false ? " فيزا" : " كاش"}
            </div>
          </div>
        </Col>
        <Col xs="12" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{item.totalOrderPrice} جنيه</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllItemNes;
