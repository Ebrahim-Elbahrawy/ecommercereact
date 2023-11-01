import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddBrandHook from "./../../hook/brand/add-brand-page-hook";

const AdminAddBrand = () => {
  const [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ] = AddBrandHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه ماركه جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركه</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="not found"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>

            <input
              type="file"
              id="upload-photo"
              name="photo"
              onChange={onImageChange}
            />
          </div>
          <input
            onChange={onChangeName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركة"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>

      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h4>تم الانتهاء</h4>
        )
      ) : null}
      <ToastContainer theme="dark" />
    </div>
  );
};

export default AdminAddBrand;
