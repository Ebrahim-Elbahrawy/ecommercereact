import { ALL_REVIEW, CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../type";
const initial = {
  createReview: [],
  allReview: [],
  deleteReview: [],
  editReview: [],
  loading: true,
};
const reviewReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
        loading: false,
      };
    case ALL_REVIEW:
      return {
        ...state,
        allReview: action.payload,
        loading: false,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
        loading: false,
      };
    case EDIT_REVIEW:
      return {
        ...state,
        editReview: action.payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;
