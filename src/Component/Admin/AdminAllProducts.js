import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ items }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {items
          ? items.map((item) => <AdminAllProductsCard product={item} />)
          : null}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
