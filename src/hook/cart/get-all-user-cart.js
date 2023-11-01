import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductFromCart } from "../../redux/action/cartAction";

function GetAllUserCart() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [cartNum, setCartNum] = useState(0);
  const [couponNameRes, setCouponNameRes] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] =
    useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const res = useSelector((state) => state.cartReducer.allCart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(getAllProductFromCart());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (res && res.status === "success") {
      setCartNum(res.numOfCartItems);
      setCartItems(res.data.products);
      setTotalPrice(res.data.totalCartPrice);
      setCartId(res.data._id);
      if (res.data.coupon) {
        setCouponNameRes(res.data.coupon);
      } else {
        setCouponNameRes("");
      }
      if (res.data.totalAfterDiscount) {
        setTotalCartPriceAfterDiscount(res.data.totalAfterDiscount);
      } else {
        setTotalCartPriceAfterDiscount("");
      }
    } else {
      setCartNum(0);
      setTotalPrice(0);
      setCartId("0");
    }
  }, [res]);

  return [
    cartNum,
    cartItems,
    totalPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
    cartId,
  ];
}

export default GetAllUserCart;
