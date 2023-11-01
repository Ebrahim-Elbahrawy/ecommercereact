import {
  ADD_PRODUCT_CART,
  ROMOVE_PRODUCT_CART,
  GET_ALL_PRODUCT_CART,
  CLEAR_PRODUCT_CART,
  UPPDATE_PRODUCT_CART,
  GET_ERROR,
  APPLY_COUPON,
} from "../type";

const initial = {
  allCart: [],
  addCart: [],
  removeCart: [],
  updateQnt: [],
  clearCart: [],
  coupon: [],
};
const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_CART:
      return {
        ...state,
        allCart: action.payload,
      };
    case ADD_PRODUCT_CART:
      return {
        ...state,
        addCart: action.payload,
      };
    case APPLY_COUPON:
      return {
        ...state,
        coupon: action.payload,
      };
    case ROMOVE_PRODUCT_CART:
      return {
        ...state,
        removeCart: action.payload,
      };
    case CLEAR_PRODUCT_CART:
      return {
        ...state,
        clearCart: action.payload,
      };
    case UPPDATE_PRODUCT_CART:
      return {
        ...state,
        updateQnt: action.payload,
      };
    case GET_ERROR:
      return {
        allCart: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
