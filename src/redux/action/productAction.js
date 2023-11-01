import { useGetData } from "../../hoocks/useGetData";
import { useInsertDataWithImage } from "../../hoocks/useInsertData";
import useDeleteData from "../../hoocks/useDeleteData";
import { useUpdateDataWithImage } from "../../hoocks/useUpdateData";

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

// get all products
export const getAllProduct = (limit) => async (dispatch) => {
  const res = await useGetData(`/api/v1/products?limit=${limit}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ALL_PRODUCT,
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

// GET ONE PRODUCT
export const getOneProduct = (id) => async (dispatch) => {
  const res = await useGetData(`/api/v1/products/${id}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ONE_PRODUCT,
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
// GET same product
export const getSameProduct = (id) => async (dispatch) => {
  const res = await useGetData(`/api/v1/products?category=${id}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_SAME_PRODUCT,
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
//
// GET  ALL Product WITH PAGINATION
export const getAllProductPage = (limit, page) => async (dispatch) => {
  const res = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ALL_PRODUCT,
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

// get allproduct with qurey string

// get all products
export const getAllProductSearch = (querystring) => async (dispatch) => {
  const res = await useGetData(`/api/v1/products?${querystring}`);
  try {
    dispatch({
      type: GET_ALL_PRODUCT,
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

// POST productS

export const createProduct = (formData) => async (dispatch) => {
  const res = await useInsertDataWithImage(`/api/v1/products`, formData);
  try {
    dispatch({
      type: CREATE_PRODUCT,
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

//update date

export const editProduct = (id, data) => async (dispatch) => {
  const res = await useUpdateDataWithImage(`/api/v1/products/${id}`, data);
  try {
    dispatch({
      type: EDIT_PRODUCT,
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

// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/products/${id}`);
  try {
    dispatch({
      type: DELETE_PRODUCT,
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

// get all product by category
export const getProductByCategory = (limit, page, id) => async (dispatch) => {
  const res = await useGetData(
    `/api/v1/products?limit=${limit}&page=${page}&category=${id}`
  ); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_PRODUCT_BY_CATEGORY,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_BY_CATEGORY,
      payload: e.response,
    });
  }
};
