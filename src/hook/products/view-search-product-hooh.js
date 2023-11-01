import { useEffect } from "react";
import { getAllProductSearch } from "../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
const ViewSearchProductsHook = () => {
  const allProduct = useSelector((state) => state.allProduct.product);
  const dispatch = useDispatch();
  const limit = 12;
  const getProduct = async () => {
    getStorage();
    sortData();
    let priceFromString = "";
    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gt]=${priceFrom}`;
    }
    let priceToString = "";
    if (priceFrom === "" || priceFrom <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
    await dispatch(
      getAllProductSearch(
        `limit=${limit}&sort=${sort}&keyword=${word}${priceFromString}${priceToString} &${catCheaked}&${brandChecked}`
      )
    );
  };
  useEffect(() => {
    getProduct("");
  }, []);

  const allProducts = useSelector((state) => state.allProduct.product);
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
    getStorage();
    sortData();
    await dispatch(
      getAllProductSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${catCheaked}${brandChecked}`
      )
    );
  };
  let word = "";
  let catCheaked = "";
  let brandChecked = "";
  let priceFrom = "";
  let priceTo = "";
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    if (localStorage.getItem("catChecked") != null)
      catCheaked = localStorage.getItem("catChecked");
    if (localStorage.getItem("brandChecked") != null)
      brandChecked = localStorage.getItem("brandChecked");
    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");
    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");
  };
  let sortType = "",
    sort;
  // when user choise sort
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    }
    if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    }
    if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    }
    if (sortType === "الاعلي تقييما") {
      sort = "+quantity";
    }
  };

  return [items, pageCount, getpage, getProduct, lengthFromSearch];
};
export default ViewSearchProductsHook;
