import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import AddAddressUserHook from "../../hook/address/add-address-user-hook";

const UserAllAddress = () => {
  const [, , , , , , , allUserAddress] = AddAddressUserHook();
  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العنوانين</div>
      {allUserAddress.map((item, index) => {
        return <UserAddressCard key={index} address={item} />;
      })}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress;
