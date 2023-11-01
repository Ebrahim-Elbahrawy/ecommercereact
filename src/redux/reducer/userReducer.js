import { EDIT_USER, UPDATE_PASSWORD } from "../type";

const initial = {
  editUse: [],
  updatePassword: [],
};
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        editUse: action.payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatePassword: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
