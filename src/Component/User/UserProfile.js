import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import deleteicon from "../../images/delete.png";

import ProfileHook from "../../hook/userProfile/profile-hook";
import { ToastContainer } from "react-toastify";

const UserProfile = () => {
  const [
    show,
    handleClose,
    handleShow,
    handleSumbit,
    userName,
    email,
    phone,
    handleUserName,
    handleEmail,
    handlePhone,
    oldPassword,
    Password,
    confirmPassword,
    changeOldPassword,
    changeConfirmPassword,
    changePassword,
    handleChangePassword,
  ] = ProfileHook();
  let user = [];
  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  return (
    <div>
      <div className="admin-content-text">الصفحه الشخصية</div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        className="d-flex justify-content-center  align-items-center w-100"
        style={{ width: "350px" }}
      >
        <Modal.Header>
          <Modal.Title> تعديل بياناتك</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="اسم المستخدم"
            value={userName}
            onChange={handleUserName}
            style={{ width: "350px" }}
          />
          <input
            type="phone"
            className="input-form font d-block mt-3 px-3"
            placeholder="رقم الهاتف "
            value={phone}
            onChange={handlePhone}
          />
          <input
            type="email"
            className="input-form font d-block mt-3 px-3"
            placeholder="الايميل "
            value={email}
            onChange={handleEmail}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handleSumbit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم:</div>
            <div className="p-1 item-delete-edit">{user.name} </div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2" onClick={handleShow}>
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="ادخل كلمة المرور القديمة"
              value={oldPassword}
              onChange={changeOldPassword}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديده"
              value={Password}
              onChange={changePassword}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="تاكيد كلمة المرور الجديده"
              value={confirmPassword}
              onChange={changeConfirmPassword}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              className="btn-save d-inline mt-2 "
              onClick={handleChangePassword}
            >
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserProfile;
