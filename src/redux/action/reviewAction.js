import { useInsertData } from "../../hoocks/useInsertData";
import { CREATE_REVIEW, ALL_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../type";
import { useGetData } from "./../../hoocks/useGetData";
import useDeleteData from "./../../hoocks/useDeleteData";
import { useUpdateData } from "./../../hoocks/useUpdateData";

export const createReview = (id, body) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/products/${id}/reviews`, body); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: CREATE_REVIEW,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.res,
    });
  }
};

export const allReview = (id, page, limit) => async (dispatch) => {
  const res = await useGetData(
    `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`
  ); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: ALL_REVIEW,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: ALL_REVIEW,
      payload: e.res,
    });
  }
};

// delete review on product

export const deleteReview = (id) => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/reviews/${id}`);
  try {
    dispatch({
      type: DELETE_REVIEW,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.res,
    });
  }
};

// Edit review on product

export const editReview = (id, body) => async (dispatch) => {
  const res = await useUpdateData(`/api/v1/reviews/${id}`, body);
  try {
    dispatch({
      type: EDIT_REVIEW,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: EDIT_REVIEW,
      payload: e.res,
    });
  }
};
