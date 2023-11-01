import { useInsertData } from "../../hoocks/useInsertData";
import {
  ADD_PRODUCT_FAVOURITE,
  ROMOVE_PRODUCT_FAVOURITE,
  GET_ALL_PRODUCT_FAVOURITE,
} from "../type";
import useDeleteData from "./../../hoocks/useDeleteData";
import { useGetDataToken } from "./../../hoocks/useGetData";
//ADD FAVOURITE PRODUCT
export const addProductToWishList = (body) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/wishlist`, body);

  // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: ADD_PRODUCT_FAVOURITE,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_FAVOURITE,
      payload: e.res,
    });
  }
};

//Remove FAVOURITE PRODUCT
export const removeProductFromWishList = (id) => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/wishlist/${id}`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: ROMOVE_PRODUCT_FAVOURITE,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ROMOVE_PRODUCT_FAVOURITE,
      payload: e.res,
    });
  }
};

//GET FAVOURITE PRODUCT
export const getAllProductFromWishList = (id) => async (dispatch) => {
  const res = await useGetDataToken(`/api/v1/wishlist`); // customhook to get data from urll get two parameter
  try {
    dispatch({
      type: GET_ALL_PRODUCT_FAVOURITE,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_PRODUCT_FAVOURITE,
      payload: e.res,
    });
  }
};
