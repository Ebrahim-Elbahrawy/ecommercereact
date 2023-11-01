import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrand,
  getAllBrandPage,
} from "../../redux/action/brandAction.js";
const AllBrandPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand(4));
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  let pageCount = 0;
  if (brand.paginationResult && brand.paginationResult.numberOfPages) {
    pageCount = brand.paginationResult.numberOfPages;
  }
  const getpage = (page) => {
    console.log(page);
    dispatch(getAllBrandPage(page));
  };

  return [loading, brand, getpage, pageCount];
};

export default AllBrandPageHook;
