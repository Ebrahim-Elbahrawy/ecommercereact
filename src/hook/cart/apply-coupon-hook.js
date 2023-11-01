import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { applyCouponToCart } from "../../redux/action/cartAction";
import notify from "../useNotification";

const ApplyCouponHook = () => {
  const dispatch = useDispatch();

  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCoupon = (e) => {
    setCouponName(e);
  };

  const handelSubmitCoupon = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل الكوبون", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      applyCouponToCart({
        couponName: couponName,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.coupon);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم تطبيق الكوبون بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warn");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    }
  }, [loading]);

  return [couponName, onChangeCoupon, handelSubmitCoupon];
};

export default ApplyCouponHook;
