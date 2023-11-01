import { useState } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/action/catagoryAction";
import { useEffect } from "react";
import notify from "../useNotification";
const AddCategoryHook = () => {
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIspress] = useState(false);

  const dispatch = useDispatch();

  const res = useSelector((state) => state.allCategory.category);

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  // when user change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  // SAVE DATA IN DATABASE
  const handelSubmit = async (e) => {
    e.preventDefault();
    if ((name === "", selectedFile === null)) {
      notify("من فضلك أدخل البيانات", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIspress(true);
    await dispatch(createCategory(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      setLoading(true);
      setIspress(false);
      if (res.status === 201) {
        notify("تم أضافة العمليه بنجاح", "success");
      } else {
        notify("هناك مشكلة فى الاضافة ", "error");
      }
    }
  }, [loading]);

  return [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ];
};

export default AddCategoryHook;
