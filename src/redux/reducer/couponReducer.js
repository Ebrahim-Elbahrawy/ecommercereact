import {
  GET_ALL_COUPON,
  CREATE_NEW_COUPON,
  GET_ERROR,
  DELETE_COUPON,
} from "../type";

const initial = {
  allCoupon: [],
  newCoupon: [],
  deleteCoupon: [],
  loading: true,
};
const couponReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_COUPON:
      return {
        ...state,
        allCoupon: action.payload,
      };
    case CREATE_NEW_COUPON:
      return {
        ...state,
        newCoupon: action.payload,
      };
    case DELETE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
      };
    case GET_ERROR:
      return {
        allCoupon: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default couponReducer;
