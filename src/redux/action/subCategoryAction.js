import { useGetData } from "../../hoocks/useGetData";
import { useInsertData } from "../../hoocks/useInsertData";
import { GET_ERROR, CREATE_SUBCATEGORY, GET_SUBCATEGORY } from "../type";

export const createSubCategory = (data) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/subcategories`, data);
  try {
    dispatch({
      type: CREATE_SUBCATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};

// get sub category

export const getSubCategory = (id) => async (dispatch) => {
  const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
  try {
    dispatch({
      type: GET_SUBCATEGORY,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};
