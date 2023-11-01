import {
  GET_ALL_PRODUCT,
  GET_ERROR,
  CREATE_PRODUCT,
  GET_ONE_PRODUCT,
  GET_SAME_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_CATEGORY,
} from "../type";

const initial = {
  product: [],
  loading: true,
  oneProduct: [],
  sameProduct: [],
  deletProduct: [],
  catProduct: [],
};
const productReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        catProduct: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        product: action.payload,
        loading: false,
      };
    case GET_ONE_PRODUCT:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_SAME_PRODUCT:
      return {
        ...state,
        sameProduct: action.payload,
        loading: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deletProduct: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
