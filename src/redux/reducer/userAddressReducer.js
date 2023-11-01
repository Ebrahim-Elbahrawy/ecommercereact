import {
  CREATE_NEW_ADDRESS,
  GET_ALL_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
  GET_ONE_ADDRESS,
  GET_ERROR,
} from "../type";

const initial = {
  allAddress: [],
  newAddress: [],
  deleteAddress: [],
  editAddress: [],
  oneAddress: [],
  loading: true,
};
const userAddressReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_ADDRESS:
      return {
        ...state,
        allAddress: action.payload,
      };
    case CREATE_NEW_ADDRESS:
      return {
        ...state,
        newAddress: action.payload,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        deleteAddress: action.payload,
      };
    case GET_ONE_ADDRESS:
      return {
        ...state,
        oneAddress: action.payload,
      };
    case EDIT_ADDRESS:
      return {
        ...state,
        editAddress: action.payload,
      };
    case GET_ERROR:
      return {
        allAddress: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userAddressReducer;
