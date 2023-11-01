import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/action/catagoryAction.js";
const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory(6));
    };
    get();
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  let pageCount = 0;
  try {
    if (category.paginationResult) {
      pageCount = category.paginationResult.numberOfPages;
    }
  } catch (e) {}

  const getpage = async (page) => {
    await dispatch(getAllCategoryPage(page));
  };

  return [loading, category, getpage, pageCount];
};

export default AllCategoryPageHook;
