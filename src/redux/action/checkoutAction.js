import { useInsertData } from "../../hoocks/useInsertData";

import { CREATE_ORDER_CASH } from "../type";

//ADD ORDER CASH
export const createOrder = (id, body) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/orders/${id}`, body);
  try {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.res,
    });
  }
};
