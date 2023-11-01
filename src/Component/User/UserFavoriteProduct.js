import React, { useEffect } from "react";
import { Row } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getAllProductFromWishList } from "./../../redux/action/wishListAction";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import ProductCardContainer from "../Product/ProductCardContainer";
const UserFavoriteProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState();
  const favoriteProduct = useSelector(
    (state) => state.wishListReducer.getFavourite
  );
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllProductFromWishList());
      setLoading(false);
    };
    get();
  }, []);
  useEffect(() => {
    if (loading === false) {
      if (favoriteProduct && favoriteProduct.data) {
        setItems(favoriteProduct.data);
      }
    }
  }, [loading]);

  return (
    <div>
      {loading === true ? (
        <Spinner animation="border" />
      ) : loading === false ? (
        <>
          <div className="admin-content-text pb-4">قائمة المفضلة</div>
          <Row className="justify-content-start">
            <ProductCardContainer
              title="منتجاتك المفضلة "
              btntitle=""
              pathText=""
              items={items}
            />
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default UserFavoriteProduct;
