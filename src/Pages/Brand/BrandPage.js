import React from "react";
import Pagination from "../../Component/utility/Pagination";
import BrandContainer from "../../Component/Brand/BrandContainer";
import AllBrandPageHook from "./../../hook/brand/all-brand-page-hook";
function BrandPage() {
  const [loading, brand, getpage, pageCount] = AllBrandPageHook();

  return (
    <div style={{ minHeight: "670px" }}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <BrandContainer data={brand.data} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getpage} />
          ) : null}
        </>
      )}
    </div>
  );
}

export default BrandPage;
