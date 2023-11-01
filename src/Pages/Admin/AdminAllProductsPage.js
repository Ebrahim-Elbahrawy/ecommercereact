import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Component/Admin/AdminSideBar";
import Pagination from "./../../Component/utility/Pagination";
import AdminAllProducts from "./../../Component/Admin/AdminAllProducts";
import ViewProductAdminHoock from "../../hook/admin/view-product-admin-hook";

function AdminAllProductsPage() {
  const [items, pageCount, getpage] = ViewProductAdminHoock();
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts items={items} />
        </Col>
      </Row>
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getpage} />
      ) : null}
    </Container>
  );
}

export default AdminAllProductsPage;
