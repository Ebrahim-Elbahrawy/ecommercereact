import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import EditAddressUserHook from "../../hook/address/edit-address-user-hook";
import Spinner from "react-bootstrap/Spinner";
const UserEditAddress = () => {
  const id = useParams();

  const [
    loading,
    handleSumbit,
    addressName,
    addressDescription,
    phone,
    handleAddressName,
    handleAddressDescription,
    handlePhone,
  ] = EditAddressUserHook(id.id);
  console.log(loading);
  return (
    <div>
      {loading === true ? (
        <Spinner animation="border" />
      ) : loading === false ? (
        <>
          <Row className="justify-content-start ">
            <div className="admin-content-text pb-2">تعديل العنوان </div>
            <Col sm="8">
              <input
                type="text"
                className="input-form d-block mt-3 px-3"
                value={addressName}
                onChange={handleAddressName}
                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
              />
              <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                value={addressDescription}
                onChange={handleAddressDescription}
                placeholder="العنوان بالتفصيل"
              />
              <input
                type="text"
                value={phone}
                className="input-form d-block mt-3 px-3"
                placeholder="رقم التليفون"
                onChange={handlePhone}
              />
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="d-flex justify-content-end ">
              <button
                className="btn-save d-inline mt-2 "
                onClick={handleSumbit}
              >
                حفظ تعديل العنوان
              </button>
            </Col>
          </Row>
        </>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default UserEditAddress;
