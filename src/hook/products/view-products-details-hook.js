import { useEffect } from "react";
import {
  getOneProduct,
  getSameProduct,
} from "../../redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "./../../redux/action/catagoryAction";
import { getOneBrand } from "./../../redux/action/brandAction";
import { useState } from "react";
const ViewProductsDetailsHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneProduct(id));
    };
    get();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);
  const product = useSelector((state) => state.allProduct.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const sameProduct = useSelector((state) => state.allProduct.sameProduct);

  let item = [];
  if (product && product.data) item = product.data;
  else item = [];
  let sameProducts = [];
  if (sameProduct && sameProduct.data) {
    sameProducts = sameProduct.data.slice(0, 4);
  } else sameProducts = [];
  useEffect(() => {
    if (item.category) dispatch(getOneCategory(item.category));
    if (item.brand) dispatch(getOneBrand(item.brand));
    if (item.category) dispatch(getSameProduct(item.category));
  }, [item]);
  //to show category item
  let cat = [];
  if (oneCategory.data) cat = oneCategory.data;
  else cat = [];
  //to show category item
  let brand = [];
  if (oneBrand.data) brand = oneBrand.data;
  else brand = [];
  let images = [];

  if (product && product.data && product.data.images) {
    images = product.data.images.map((item) => {
      return { original: item };
    });
  } else {
    images = [{ original: mobile }];
  }

  return [item, images, cat, brand, sameProducts, loading];
};

export default ViewProductsDetailsHook;
