import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "./../../redux/action/productAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const allProducts = useSelector((state) => state.allProduct.product);
  let items =[];
  if (allProducts && allProducts.data) {
    items = allProducts.data.slice(0, 4);
  } else {
    items = [];
  }
  return [items];
};

export default ViewHomeProductsHook;
