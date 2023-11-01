import CatagoryContainer from "../../Component/Catagory/CatagoryContainer";
import Pagination from "../../Component/utility/Pagination";
import AllCategoryPageHook from "../../hook/category/all-category-page-hoock";
function CatagoryPage() {
  const [loading, category, getpage, pageCount] = AllCategoryPageHook();

  return (
    <div style={{ minHeight: "670px" }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CatagoryContainer data={category.data} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getpage} />
          ) : null}
        </>
      )}
    </div>
  );
}

export default CatagoryPage;
