import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductFromWishList } from "./../../redux/action/wishListAction";

const CardContainerHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);

  const res = useSelector((state) => state.wishListReducer.getFavourite);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllProductFromWishList());
      setLoading(false);
    };

    get();
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (res.data.length >= 1) {
        setFavProd(res.data.map((item) => item._id));
      } else setFavProd([]);
    }
  }, [loading, res.data]);

  return [favProd];
};

export default CardContainerHook;
