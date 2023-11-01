import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import Pagination from "../../Component/utility/Pagination";
import UserGetAllOrderHook from "../../hook/userProfile/user-get-all-order-hook";
const AdminAllOrders = () => {
  const [userName, items, paggination, result, onPress] = UserGetAllOrderHook();
  return (
    <div>
      <div className="admin-content-text">ادارة جميع الطلبات</div>
      <Row className="justify-content-start">
        {items.length >= 1
          ? items.map((item, index) => {
              return <AdminAllOrdersItem key={index} item={item} />;
            })
          : null}
      </Row>
      {paggination.numberOfPages >= 2 ? (
        <Pagination
          pageCount={paggination.numberOfPages ? paggination.numberOfPages : 0}
          onPress={onPress}
        />
      ) : null}
    </div>
  );
};

export default AdminAllOrders;
