import React from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "../../hook/coupon/add-coupon-hook";
import CouponCard from "../coupon/CouponCard";

function AdminAddCoupon() {
  const [
    name,
    discount,
    date,
    dateRef,
    handleNameChange,
    handleDateChange,
    handleDateFocus,
    handleDateBlur,
    handleDiscountChange,
    handleAddCoupon,
    allCoupon,
  ] = AddCouponHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه كوبون جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">بيانات الكوبون </div>

          <input
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder=" اسم الكوبون"
            onChange={handleNameChange}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder=" تاريخ الانتهاء"
            value={date}
            onChange={handleDateChange}
            onFocus={handleDateFocus}
            onBlur={handleDateBlur}
            ref={dateRef}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" نسبة الخصم "
            value={discount}
            onChange={handleDiscountChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            className="btn-save d-inline mt-2 "
            onClick={(e) => handleAddCoupon(e)}
          >
            اضافة كوبون مجانى
          </button>
        </Col>
      </Row>
      <ToastContainer theme="dark" />
      <Row className="justify-content-start ">
        <Col sm="8">
          {allCoupon.data ? (
            allCoupon.data.map((item, index) => {
              return <CouponCard item={item} key={index} />;
            })
          ) : (
            <h2> لا يوجد كوبانات الان </h2>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default AdminAddCoupon;
