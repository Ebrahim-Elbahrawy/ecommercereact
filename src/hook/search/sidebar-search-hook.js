import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../redux/action/catagoryAction";
import { getAllBrand } from "./../../redux/action/brandAction";
import ViewSearchProductsHook from "../products/view-search-product-hooh";
const SidebarSearchHook = () => {
  const [, , , getProduct] = ViewSearchProductsHook();
  const dispatch = useDispatch();
  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [From, setPriceFrom] = useState(0);
  const [to, setPriceTo] = useState(0);

  //when first load

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, []);

  // to get state from redux category & brand
  const allCat = useSelector((state) => state.allCategory.category);
  const allbrand = useSelector((state) => state.allBrand.brand);

  let category = [];
  try {
    if (allCat && allCat.data) {
      category = allCat.data;
    }
  } catch (e) {}

  let brand = [];
  try {
    if (allbrand && allbrand.data) {
      brand = allbrand.data;
    }
  } catch (e) {}

  // when click gategory
  var queryCat = "";
  const clickGategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = catChecked.filter((e) => e !== value);

        setCatChecked(newArray);
      }
    }
  };
  useEffect(() => {
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked]);
  var querybrand = "";
  useEffect(() => {
    querybrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", querybrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);
  // when click Brand
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArray);
      }
    }
  };
  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [to, From]);
  return [category, brand, clickGategory, clickBrand, priceFrom, priceTo];
};

export default SidebarSearchHook;
