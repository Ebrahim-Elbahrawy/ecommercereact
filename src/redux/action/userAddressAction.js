import { useGetDataToken } from "../../hoocks/useGetData";
import { useInsertData } from "../../hoocks/useInsertData";
import { useUpdateData } from "../../hoocks/useUpdateData";
import {
  CREATE_NEW_ADDRESS,
  GET_ALL_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
  GET_ONE_ADDRESS,
} from "../type";
import useDeleteData from "./../../hoocks/useDeleteData";

export const createNewAddress = (data) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/addresses`, data);
  try {
    dispatch({
      type: CREATE_NEW_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_ADDRESS,
      payload: e.res,
    });
  }
};

// get all address
export const getAllAddress = () => async (dispatch) => {
  const res = await useGetDataToken(`/api/v1/addresses`);

  try {
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: e.res,
    });
  }
};

// get specific address
export const getOneAddress = (id) => async (dispatch) => {
  const res = await useGetDataToken(`/api/v1/addresses/${id}`);

  try {
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: e.res,
    });
  }
};
export const deleteAddress = (id) => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/addresses/${id}`);
  try {
    dispatch({
      type: DELETE_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ADDRESS,
      payload: e.res,
    });
  }
};

export const edditAddress = (id, body) => async (dispatch) => {
  const res = await useUpdateData(`/api/v1/addresses/${id}`, body);
  try {
    dispatch({
      type: EDIT_ADDRESS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: EDIT_ADDRESS,
      payload: e.res,
    });
  }
};
