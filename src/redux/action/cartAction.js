import { useInsertData } from "../../hoocks/useInsertData";
import { useUpdateData } from "../../hoocks/useUpdateData";
import {
  ADD_PRODUCT_CART,
  ROMOVE_PRODUCT_CART,
  GET_ALL_PRODUCT_CART,
  CLEAR_PRODUCT_CART,
  UPPDATE_PRODUCT_CART,
  APPLY_COUPON,
} from "../type";
import useDeleteData from "./../../hoocks/useDeleteData";
import { useGetDataToken } from "./../../hoocks/useGetData";
//ADD FAVOURITE PRODUCT
export const addProductToCart = (body) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/cart`, body);
  try {
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: e.res,
    });
  }
};

//Remove FAVOURITE PRODUCT
export const removeProductFromCart = (id) => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/cart/${id}`);
  try {
    dispatch({
      type: ROMOVE_PRODUCT_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: ROMOVE_PRODUCT_CART,
      payload: e.res,
    });
  }
};
export const clearProductFromCart = () => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/cart`);
  try {
    dispatch({
      type: CLEAR_PRODUCT_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_PRODUCT_CART,
      payload: e.res,
    });
  }
};

export const getAllProductFromCart = () => async (dispatch) => {
  const res = await useGetDataToken(`/api/v1/cart`);

  try {
    dispatch({
      type: GET_ALL_PRODUCT_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_PRODUCT_CART,
      payload: e.res,
    });
  }
};

export const uppdateProductFromCart = (id, body) => async (dispatch) => {
  const res = await useUpdateData(`/api/v1/cart/${id}`, body);

  try {
    dispatch({
      type: UPPDATE_PRODUCT_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: UPPDATE_PRODUCT_CART,
      payload: e.res,
    });
  }
};

export const applyCouponToCart = (data) => async (dispatch) => {
  const res = await useUpdateData(`/api/v1/cart/applyCoupon`, data);

  try {
    dispatch({
      type: APPLY_COUPON,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON,
      payload: e.res,
    });
  }
};
