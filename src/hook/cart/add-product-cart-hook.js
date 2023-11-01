import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/action/cartAction";
import notify from "./../useNotification";

function AddProductCartHook(prodID) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [indexColor, setIndexColor] = useState("");
  const [colorName, setColorName] = useState("");
  const colorClick = (index, color) => {
    setIndexColor(index);
    setColorName(color);
  };
  const handleAddProductToCart = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: prodID,
        color: colorName,
      })
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    setLoading(false);
  };
  const res = useSelector((state) => state.cartReducer.addCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم أضافة المنتج للعربة بنجاح ", "success");
      } else {
        notify("قم بتسجيل الدخول اولا", "warn");
      }
    }
  }, [loading]);
  return [colorClick, indexColor, handleAddProductToCart];
}

export default AddProductCartHook;
