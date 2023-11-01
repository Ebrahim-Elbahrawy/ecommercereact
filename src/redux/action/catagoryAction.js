import { useGetData } from "../../hoocks/useGetData";
import { useInsertDataWithImage } from "../../hoocks/useInsertData";
import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  GET_one_category,
} from "../type";
export const getAllCategory = (limit) => async (dispatch) => {
  const res = await useGetData(`/api/v1/categories?limit=${limit}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};

// GET  ALL CATAGORY WITH PAGINATION
export const getAllCategoryPage = (page) => async (dispatch) => {
  const res = await useGetData(`/api/v1/categories?limit=4&page=${page}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ALL_CATEGORY,
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

// get one Category
export const getOneCategory = (id) => async (dispatch) => {
  const res = await useGetData(`/api/v1/categories/${id}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_one_category,
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
// POST GATEGORY

export const createCategory = (formData) => async (dispatch) => {
  const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
  try {
    dispatch({
      type: CREATE_CATEGORY,
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
