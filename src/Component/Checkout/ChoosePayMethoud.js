import React from "react";
import { Row, Col } from "react-bootstrap";
import AddAddressUserHook from "../../hook/address/add-address-user-hook";
import OrderPayCashHook from "../../hook/checkout/order-pay-cash-hook";
import { ToastContainer } from "react-toastify";
const ChoosePayMethoud = () => {
  const [, , , , , , , allUserAddress] = AddAddressUserHook();

  const [handelCloseSelect, addressDet, createOrderCash, totalPrice] =
    OrderPayCashHook();

  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-2">
            <input
              style={{ cursor: "pointer" }}
              name="group"
              id="group1"
              type="radio"
              value="الدفع عن طريق الفيزا"
              className="mt-2"
            />
            <label
              className="mx-2"
              htmlFor="group1"
              style={{ cursor: "pointer" }}
            >
              الدفع عن طريق البطاقه الائتمانية
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="12" className="d-flex">
            <input
              style={{ cursor: "pointer" }}
              name="group"
              id="group2"
              type="radio"
              value="الدفع عند الاستلام"
              className="mt-2"
            />
            <label
              className="mx-2"
              htmlFor="group2"
              style={{ cursor: "pointer" }}
            >
              الدفع عند الاستلام
            </label>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col xs="6" className="d-flex">
            {" "}
            <select
              name="address"
              id="address"
              className="select mt-3 px-2 "
              onChange={handelCloseSelect}
            >
              <option value="0"> اختر عنوان للتوصيل </option>(
              {allUserAddress ? (
                allUserAddress.map((item, index) => {
                  return (
                    <option value={item._id} key={index}>
                      {item.alias}
                    </option>
                  );
                })
              ) : (
                <option value="0"> لا يوجد عنوان </option>
              )}
              ))
            </select>
          </Col>{" "}
        </Row>
      </div>
      <ToastContainer />
      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">
            {totalPrice} جنية
          </div>
          <button
            className="product-cart-add px-3 pt-2 d-inline me-2"
            onClick={createOrderCash}
          >
            {" "}
            اتمام الشراء
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethoud;
