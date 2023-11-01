import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminAllOrdersItem = ({ item }) => {
  console.log(item);
  return (
    <Col sm="12">
      <Link
        to={`/admin/orders/${item._id}`}
        className="cart-item-body-admin my-2 px-1 d-flex"
        style={{ textDecoration: "none" }}
      >
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">طلب رقم #{item.id}</div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                طلب من {item.user.name ? item.user.name : null}
              </div>
              <div className="d-inline pt-2 text-black-50 me-2">
                {item.user.email ? item.user.email : null}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className=" d-flex">
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
          </Row>

          <Row className="justify-content-start">
            <Col sm="12" className=" d-flex flex-row justify-content-end">
              <div className="d-inline pt-2 barnd-text">
                {item.totalOrderPrice} جنية
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
