import { useEffect, useState } from "react";
import ViewSearchProductsHook from "./../products/view-search-product-hooh";

const NavbarSearchHook = () => {
  const [, , , getProduct] = ViewSearchProductsHook();
  const [searchWord, setSearchWord] = useState("");

  const onChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/product") {
      window.location.href = "/product";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);

  return [onChangeSearch, searchWord];
};

export default NavbarSearchHook;
