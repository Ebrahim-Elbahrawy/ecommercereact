import React from "react";
import { Row } from "react-bootstrap";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

const SideFilter = () => {
  const [category, brand, clickGategory, clickBrand, priceFrom, priceTo] =
    SidebarSearchHook();
  const localto = localStorage.getItem("priceTo");
  const localfrom = localStorage.getItem("priceFrom");

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input
              type="checkbox"
              value="0"
              onChange={(e) => clickGategory(e)}
            />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {category.map((cat, index) => (
            <div className="d-flex mt-2" key={index}>
              <input
                type="checkbox"
                value={cat._id}
                onChange={(e) => clickGategory(e)}
              />
              <div className="filter-sub me-2 ">{cat.name}</div>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" onChange={clickBrand} />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {brand.map((brand, index) => (
            <div className="d-flex mt-2" key={index}>
              <input type="checkbox" value={brand._id} onChange={clickBrand} />
              <div className="filter-sub me-2 ">{brand.name}</div>
            </div>
          ))}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            value={localfrom}
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "70px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            value={localto}
            onChange={priceTo}
            className="m-2 text-center"
            type="number"
            style={{ width: "70px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
