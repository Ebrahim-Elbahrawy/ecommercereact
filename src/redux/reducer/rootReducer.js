import { combineReducers } from "redux"; // داله بتجمع كل الرديوسر وبتقبل object
import categoryRaducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import userAddressReducer from "./userAddressReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer";
export default combineReducers({
  allCategory: categoryRaducer,
  allBrand: brandReducer,
  subCategory: subCategoryReducer,
  allProduct: productReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  wishListReducer: wishListReducer,
  couponReducer: couponReducer,
  userAddressReducer: userAddressReducer,
  userReducer: userReducer,
  cartReducer: cartReducer,
  checkoutReducer: checkoutReducer,
  orderReducer: orderReducer,
});
