import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { getAllOrders } from "../../redux/action/orderAction";

function UserGetAllOrderHook() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(0);
  const [paggination, setPaggination] = useState({});
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  let userName = "";
  if (user != null) {
    userName = user.name;
  }
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllOrders("", 5));
    };
    get();
    setLoading(false);
  }, []);

  const resOrder = useSelector((state) => state.orderReducer.getAllOrders);
if(resOrder) {
  console.log(resOrder)
}
  const onPress = async (page) => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllOrders(page, 5));
    };
    get();
    setLoading(false);
  };

  useEffect(() => {
    if (resOrder) {
      if (resOrder && resOrder.results) setResult(resOrder.results);

      if (resOrder && resOrder.paginationResult)
        setPaggination(resOrder.paginationResult);

      if (resOrder && resOrder.data) setItems(resOrder.data);
    }
  }, [resOrder, loading]);

  return [userName, items, paggination, result, onPress];
}

export default UserGetAllOrderHook;
