import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ClearProductUserHook from "../../hook/cart/clear-product-cart-hook";
import { ToastContainer } from "react-toastify";
import ApplyCouponHook from "../../hook/cart/apply-coupon-hook";
import notify from "../../hook/useNotification";

const CartCheckout = ({
  cartItems,
  totalPrice,
  couponNameRes,
  totalCartPriceAfterDiscount,
}) => {
  const [handleClearCart, , , , , ,] = ClearProductUserHook();
  const [couponName, onChangeCoupon, handelSubmitCoupon] = ApplyCouponHook();
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (cartItems.length >= 1) {
      navigate("/order/paymethoud");
    } else {
      notify("من فضلك أضف منتجات للعربة من قبل الدخول لاتمام الشراء", "warn");
    }
    // "/order/paymethoud"
  };
  useEffect(() => {
    if (couponNameRes) {
      onChangeCoupon(couponNameRes);
    }
  }, [couponNameRes]);
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3 mb-5">
      <Col xs="12" className="d-flex  flex-column  ">
        <button
          className=" product-cart-add btn w-100 px-2 bg-danger text-white"
          onClick={handleClearCart}
        >
          حذف جميع المنتجات
        </button>
        <div className="d-flex  p-2">
          <input
            className="copon-input d-inline text-center "
            placeholder="كود الخصم "
            value={couponName}
            onChange={(e) => onChangeCoupon(e.target.value)}
          />
          <button className="copon-btn d-inline " onClick={handelSubmitCoupon}>
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalCartPriceAfterDiscount >= 1
            ? `${totalCartPriceAfterDiscount || 0}جنية بدلا من ${totalPrice}`
            : `${totalPrice} جنية`}
        </div>

        <button className="product-cart-add d-inline" onClick={handleCheckout}>
          {" "}
          اتمام الشراء
        </button>
      </Col>

      <ToastContainer />
    </Row>
  );
};

export default CartCheckout;
