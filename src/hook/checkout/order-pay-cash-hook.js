import { useDispatch, useSelector } from "react-redux";
import { getOneAddress } from "../../redux/action/userAddressAction";
import { useState } from "react";
import { useEffect } from "react";
import GetAllUserCart from "../cart/get-all-user-cart";
import notify from "../useNotification";
import { createOrder } from "../../redux/action/checkoutAction";
import { useNavigate } from "react-router-dom";

function OrderPayCashHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [loadingOrder, setLoadingOrder] = useState();
  const [addressDet, setAddressDet] = useState([]);
  const [, , totalPrice, , , cartId] = GetAllUserCart();
  const handelCloseSelect = async (e) => {
    setAddressDet([]);
    if (e.target.value !== "0") {
      setLoading(true);

      await dispatch(getOneAddress(e.target.value));
      setLoading(false);
    }
  };
  const address = useSelector((state) => state.userAddressReducer.oneAddress);
  useEffect(() => {
    if (loading === false) {
      if (address && address.status === "success") {
        setAddressDet(address.data);
      } else {
        setAddressDet([]);
      }
    }
  }, [loading]);
  const createOrderCash = async () => {
    if (cartId === "0" && totalPrice === 0) {
      notify("من فضلك أضف منتجات للعربة ", "warn");
    } else {
      setLoadingOrder(true);
      await dispatch(
        createOrder(cartId, {
          shippingAddress: {
            details: addressDet.details,
            phone: addressDet.phone,
            city: addressDet.alias,
          },
        })
      );
      setLoadingOrder(false);
    }
  };
  const resOrder = useSelector((state) => state.checkoutReducer.order);
  useEffect(() => {
    if (loadingOrder === false) {
      if (resOrder && resOrder.status === 201) {
        notify(
          "تم عمل طلب المنتج بنجاح تابع حاله الطلب من الصفحه الشخصيه ",
          "success"
        );
        setTimeout(() => {
          navigate("/user/allorders");
        }, 1500);
      } else {
        notify(" هناك مشكله فى طلب الاورد حاول مره اخرى", "warn");
      }
    }
  }, [loadingOrder]);

  return [handelCloseSelect, addressDet, createOrderCash, totalPrice];
}

export default OrderPayCashHook;
