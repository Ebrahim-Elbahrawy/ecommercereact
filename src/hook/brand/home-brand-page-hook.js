import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "./../../redux/action/brandAction";
import { useEffect } from "react";

const HomeBrandPageHook = () => {
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  return [brand, loading];
};

export default HomeBrandPageHook;
