import React from "react";
import { Row, Col } from "react-bootstrap";
// import mobile from '../../images/mobile.png'
import UserAllOrderCard from "./UserAllOrderCard";
const UserAllOrderItem = ({ orderItem }) => {
  console.log(orderItem)
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

  return (
    <div className="user-order mt-2">
     <Row>
                <div className="py-2 order-title">طلب رقم #{orderItem.id || 0} ...تم بتاريخ {formatDate(orderItem.createdAt)}</div>
            </Row>
      {orderItem.cartItem 
        ? orderItem.cartItems.map((order, index) => {
            return <UserAllOrderCard order={order} key={index} />;
          })
        : null}

      <Row className="d-flex justify-content-center ">
        <Col xs="12" className="">
          <div>
            <div className="d-inline">التوصيل</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isDelivered === false
                ? "قيد التنفيذ"
                : "تم تسليم الاورد بنجاح"}
            </div>
            <div className="d-inline">الدفع</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isPaid === false ? " لم يتم " : " تم"}
            </div>
            <div className="d-inline">طريقه الدفع</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isCash === false ? " فيزا" : " كاش"}
            </div>
          </div>
        </Col>
        <Col xs="12" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{orderItem.totalOrderPrice} جنيه</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
