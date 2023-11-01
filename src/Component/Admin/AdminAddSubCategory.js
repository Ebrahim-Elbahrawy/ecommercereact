import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../hook/subCategory/add-subCategory-hook";
const AdminAddSubCategory = () => {
  const [name, category, handleChange, handleSumbit, handleChangeName] =
    AddSubCategoryHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            value={name}
            onChange={handleChangeName}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0"> اختر تصنيف فرعي </option>
            {category.data
              ? category.data.map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSumbit}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default AdminAddSubCategory;
