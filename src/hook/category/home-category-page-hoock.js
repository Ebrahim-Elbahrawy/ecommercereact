import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../redux/action/catagoryAction";
import { useEffect } from "react";

const HomeCategoryPageHook = () => {
  let data = [];
  const categoryData = useSelector((state) => state.allCategory.category);
  if( categoryData ) {
    data = categoryData
  }
  const loading = useSelector((state) => state.allCategory.loading);

  const dispatch = useDispatch();
  const colors = [
    "#F4DBA4",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  const servises = [
    {
      name: "سرعه التسليم",
      icon: (
        <i className="fa-solid fa-truck-fast categoty-card-img icon-font"></i>
      ),
    },
    {
      name: "أقترح منتج ",
      icon: (
        <i className="fa-regular fa-lightbulb categoty-card-img icon-font"></i>
      ),
      link: "user/suggestproduct",
    },
    {
      name: "تواصل معنا ",
      icon: (
        <i className="fa-solid fa-envelope categoty-card-img icon-font"></i>
      ),
    },
    {
      name: "الدفع اونلاين",
      icon: (
        <i className="fa-brands fa-cc-visa categoty-card-img icon-font"></i>
      ),
    },
    {
      name: "7ايام تبديل ",
      icon: (
        <i className="fa-solid fa-rotate-left categoty-card-img icon-font"></i>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, []);

  return [data, loading, colors, servises];
};

export default HomeCategoryPageHook;
