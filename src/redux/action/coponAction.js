import { useGetDataToken } from "../../hoocks/useGetData";
import { useInsertData } from "../../hoocks/useInsertData";
import { CREATE_NEW_COUPON, GET_ALL_COUPON, DELETE_COUPON } from "../type";
import useDeleteData from "./../../hoocks/useDeleteData";

export const createNewCoupon = (data) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/coupons`, data);
  try {
    dispatch({
      type: CREATE_NEW_COUPON,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_COUPON,
      payload: e.res,
    });
  }
};

// get all coupon
export const getAllCoupon = () => async (dispatch) => {
  const res = await useGetDataToken(`/api/v1/coupons`);
  try {
    dispatch({
      type: GET_ALL_COUPON,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPON,
      payload: e.res,
    });
  }
};
export const deleteCoupon = (id) => async (dispatch) => {
  const res = await useDeleteData(`/api/v1/coupons/${id}`);
  try {
    dispatch({
      type: DELETE_COUPON,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COUPON,
      payload: e.res,
    });
  }
};
