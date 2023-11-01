import { React } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import rate from "../../images/rate.png";
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import EditReviewHook from "../../hook/review/edit-review-hook";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ item }) => {
  const [isUser, handelDelete, handleShow, handleClose, showDelete] =
    DeleteRateHook(item);
  const [
    showEdit,
    handleEdit,
    handleCloseEdit,
    handleShowEdit,
    onChangeRateValue,
    onChangeText,
    newRateValue,
    newRateText,
  ] = EditReviewHook(item);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onChangeRateValue(newValue);
    },
  };
  return (
    <div>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من حذف التقييم</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تعديل التقييم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...setting} />

          <input
            type="text"
            className="font w-100"
            style={{ border: "none" }}
            value={newRateText}
            onChange={onChangeText}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleCloseEdit}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handleEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name  d-inline ms-2">{item.user.name} </div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{item.rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2 d-flex justify-content-between">
          <div className="rate-description  d-inline ms-2">{item.review}</div>
          {isUser === true ? (
            <div>
              <i
                className="fa-solid fa-trash-can fs-5 p-1 icon-icon"
                onClick={handleShow}
              >
                <span className="p-1">أزاله</span>
              </i>
              <i
                className="fa-regular fa-pen-to-square fs-5 p-1 icon-icon"
                onClick={handleShowEdit}
              >
                <span className="p-1">تعديل</span>
              </i>
            </div>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;
