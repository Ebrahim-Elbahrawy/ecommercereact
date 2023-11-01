import { useGetDataToken } from "../../hoocks/useGetData";

import { GET_ALL_ORDER } from "../type";

//ADD ORDER CASH

export const getAllOrderUser = (page, limit) => async (dispatch) => {
  const res = await useGetDataToken(
    `/api/v1/orders?limit=${limit}&page=${page}`
  );

  try {
    dispatch({
      type: GET_ALL_ORDER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER,
      payload: e.res,
    });
  }
};
