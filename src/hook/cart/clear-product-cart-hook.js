import { useDispatch, useSelector } from "react-redux";
import {
  clearProductFromCart,
  removeProductFromCart,
  uppdateProductFromCart,
} from "../../redux/action/cartAction";
import { useState, useEffect } from "react";
import notify from "../useNotification";

function ClearProductUserHook(item) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingdel, setLoadingDel] = useState(true);
  const [itemCount, setItemCount] = useState(1);

  useEffect(() => {
    if (item) {
      setItemCount(item.count);
    }
  }, []);
  const onChangeCount = (e) => {
    e.persist();
    setItemCount(e.target.value);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(
      uppdateProductFromCart(item._id, {
        count: itemCount,
      })
    );
    window.location.reload();
  };
  const handleClearCart = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(clearProductFromCart());

    setLoading(false);
  };
  const handleRemoveCart = async (e) => {
    e.preventDefault();
    setLoadingDel(true);
    await dispatch(removeProductFromCart(item._id));

    setLoadingDel(false);
  };
  const res = useSelector((state) => state.cartReducer.clearCart);

  const resDel = useSelector((state) => state.cartReducer.removeCart);

  useEffect(() => {
    if (res === "") {
      notify("تم الحذف بنجاح ", "success");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
    }
  }, [res]);
  useEffect(() => {
    if (resDel && resDel.status === "success") {
      notify("تم الحذف بنجاح ", "success");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
    }
  }, [resDel]);

  return [
    handleClearCart,
    loading,
    handleRemoveCart,
    onChangeCount,
    handleUpdate,
    itemCount,
  ];
}

export default ClearProductUserHook;
