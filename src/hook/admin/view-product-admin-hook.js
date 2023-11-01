import { useEffect } from "react";
import {
  getAllProduct,
  getAllProductPage,
} from "../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
const ViewProductAdminHoock = () => {
  const allProduct = useSelector((state) => state.allProduct.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const allProducts = useSelector((state) => state.allProduct.product);
  let items = [];
  if (allProducts && allProducts.data) {
    items = allProducts.data;
  } else {
    items = [];
  }
  const loading = useSelector((state) => state.allProduct.loading);
  let pageCount = 0;
  if (
    allProduct.paginationResult &&
    allProduct.paginationResult.numberOfPages
  ) {
    pageCount = allProduct.paginationResult.numberOfPages;
  } else {
    pageCount = 0;
  }
  const getpage = (page) => {
    dispatch(getAllProductPage(page));
  };

  return [items, pageCount, getpage];
};
export default ViewProductAdminHoock;
