import { CREATE_ORDER_CASH } from "../type";

const initial = {
  order: [],
};
const checkoutReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default checkoutReducer;
