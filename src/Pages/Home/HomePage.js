import React from "react";

import Slider from "../../Component/Home/Slider";
import HomeCatagory from "../../Component/Home/HomeCatagory";

import ProductCardContainer from "./../../Component/Product/ProductCardContainer";
import DiscountSection from "./../../Component/Home/DiscountSection";
import BrandCardCatagory from "../../Component/Brand/BrandCardCatagory";
import ViewHomeProductsHook from "../../hook/products/view-home-product-hook";
function HomePage() {
  const [items] = ViewHomeProductsHook();
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <ProductCardContainer
        title="الاكثر مبيعاًَ"
        btntitle="المزيد"
        pathText="/product"
        items={items}
      />
      <HomeCatagory />

      <ProductCardContainer
        title="أحدث المنتجات "
        btntitle="المزيد"
        pathText="/product"
        items={items}
      />

    </div>
  );
}

export default HomePage;
