import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/auth/register-hook";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeconfirmPassword,
    onChangephone,
    onsubmit,
  ] = RegisterHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            value={name}
            onChange={onChangeName}
            placeholder="اسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="الايميل..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="كلمه السر..."
            type="password"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={confirmPassword}
            onChange={onChangeconfirmPassword}
            placeholder=" تاكيد كلمه السر..."
            type="password"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={phone}
            onChange={onChangephone}
            placeholder="  رقم التلفون ..."
            type="phone"
            className="user-input mt-3 text-center mx-auto"
          />
          <button className="btn-login mx-auto mt-4" onClick={onsubmit}>
            تسجيل الحساب
          </button>
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer theme="dark" />
    </Container>
  );
};

export default RegisterPage;
