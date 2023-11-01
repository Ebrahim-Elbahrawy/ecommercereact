import React, { useState } from "react";
import { getAllCategory } from "./../../redux/action/catagoryAction";
import notify from "../../hook/useNotification";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSubCategory } from "./../../redux/action/subCategoryAction";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allCategory.category);
  const subCategory = useSelector((state) => state.subCategory.subcategory);
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  // on change dropdown menue
  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (id === "0" || name === "") {
      notify("من فضلك أدخل التصنيفات ", "warn");
    } else {
      setLoading(true);
      //awit

      await dispatch(createSubCategory({ name, category: id }));
      setLoading(false);
    }
  };

  /// handle change Name

  const handleChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      if (subCategory.status === 201) {
        notify("تم عملية الاضافه بنجاح", "success");
      } else if (
        subCategory === "Error Error : Request failed with status code 400"
      ) {
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "warn");
      }
    }
  }, [loading]);

  return [name, category, handleChange, handleSumbit, handleChangeName];
};

export default AddSubCategoryHook;
