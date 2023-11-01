import {
  ADD_PRODUCT_FAVOURITE,
  ROMOVE_PRODUCT_FAVOURITE,
  GET_ALL_PRODUCT_FAVOURITE,
} from "../type";
const initial = {
  addFavourite: [],
  removeFavourite: [],
  getFavourite: [],
  loading: true,
};
const wishListReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_FAVOURITE:
      return {
        ...state,
        getFavourite: action.payload,
      };
    case ADD_PRODUCT_FAVOURITE:
      return {
        ...state,
        addFavourite: action.payload,
      };
    case ROMOVE_PRODUCT_FAVOURITE:
      return {
        ...state,
        removeFavourite: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default wishListReducer;
