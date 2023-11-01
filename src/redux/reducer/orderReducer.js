import { GET_ALL_ORDER } from "../type";

const initial = {
  allOrder: [],
};
const orderReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_ORDER:
      return {
        ...state,
        allOrder: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default orderReducer;
