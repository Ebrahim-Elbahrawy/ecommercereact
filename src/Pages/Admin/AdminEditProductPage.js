import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Component/Admin/AdminSideBar";
import AdminEditProduct from "./../../Component/Admin/AdminEditProduct";
import { useParams } from "react-router-dom";
function AdminEditProductPage() {
  const { id } = useParams();
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminEditProduct id={id}/>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEditProductPage;
