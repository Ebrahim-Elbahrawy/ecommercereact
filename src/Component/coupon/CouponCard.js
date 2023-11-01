import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../redux/action/coponAction";
function CouponCard({ item }) {
  const dispatch = useDispatch();
  const date = item.expire;
  const formerDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    await dispatch(deleteCoupon(item._id));
    window.location.reload();
    setShow(false);
  };
  return (
    <div className="user-address-card my-3 px-2">
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>تنبية</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متأكد من الحذف ؟؟ </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            نعم أريد الحذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between  ">
        <Col xs="6">
          <div className="p-2 w-100"> اسم الكوبون:- {item.name}</div>
        </Col>
        <Col xs="3" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex " onClick={handleShow}>
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {` نسبة الخصم`}
            {`/ ${item.discount}%`}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            تاريخ الانتهاء /
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {formerDate(date)}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CouponCard;
