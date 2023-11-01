import { useGetData } from "../../hoocks/useGetData";
import { useInsertDataWithImage } from "../../hoocks/useInsertData";
import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND } from "../type";
export const getAllBrand = (limit) => async (dispatch) => {
  const res = await useGetData(`/api/v1/brands?limit=${limit}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ALL_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};

// GET  ALL Bran WITH PAGINATION
export const getAllBrandPage = (page) => async (dispatch) => {
  const res = await useGetData(`/api/v1/brands?limit=4&page=${page}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ALL_BRAND,
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
// GET oneBrand
export const getOneBrand = (id) => async (dispatch) => {
  const res = await useGetData(`/api/v1/brands/${id}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ONE_BRAND,
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

export const createBrand = (formData) => async (dispatch) => {
  const res = await useInsertDataWithImage(`/api/v1/brands`, formData);
  try {
    dispatch({
      type: CREATE_BRAND,
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
