import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../redux/action/productAction";

function ViewProductCategoryHook(id) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductByCategory(8, 1, id));
      setLoading(false);
    };

    get();
  }, []);
  const allProducts = useSelector((state) => state.allProduct.catProduct);

  useEffect(() => {}, [loading]);
  let items = [];
  try {
    if (allProducts && allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }
  } catch (e) {}

  let pageCount = 0;
  try {
    if (
      allProducts.paginationResult &&
      allProducts.paginationResult.numberOfPages
    ) {
      pageCount = allProducts.paginationResult.numberOfPages;
    }
  } catch (e) {}
  let lengthFromSearch = 0;
  try {
    if (allProducts && allProducts.results) {
      lengthFromSearch = allProducts.results;
    }
  } catch (e) {}

  const getpage = async (page) => {
    await dispatch(getProductByCategory("8", page, id));
  };
  return [loading, items, getpage, pageCount, lengthFromSearch];
}

export default ViewProductCategoryHook;
