import { useInsertData } from "../../hoocks/useInsertData";
import { CREATE_NEW_USER, LOGIN_USER } from "../type";

export const createNewUser = (data) => async (dispatch) => {
  const res = await useInsertData(`/api/v1/auth/signup`, data);
  try {
    dispatch({
      type: CREATE_NEW_USER,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.res,
    });
  }
};
//login  user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};
