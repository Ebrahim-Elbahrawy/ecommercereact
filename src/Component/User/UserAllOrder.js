import React from "react";
import { Row } from "react-bootstrap";
import Pagination from "./../../Component/utility/Pagination";

import UserGetAllOrderHook from "../../hook/userProfile/user-get-all-order-hook";
import UserAllItemNes from "./UserAllItemNes";

const UserAllOrder = () => {
  const [userName, items, paggination, result, onPress] = UserGetAllOrderHook();

  return (
    <div>
      <div className="admin-content-text pb-4">اهلا {userName}</div>
      <div className="admin-content-text pb-4"> يوجد {result} طلبات</div>
      <Row className="justify-content-between">
        {items.length >= 1
          ? items.map((item, index) => {
              return <UserAllItemNes key={index} item={item} />;
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

export default UserAllOrder;
