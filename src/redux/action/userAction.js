import { useUpdateData } from "../../hoocks/useUpdateData";
import { EDIT_USER, UPDATE_PASSWORD } from "../type";

export const edditUser = (body) => async (dispatch) => {
  const res = await useUpdateData(`/api/v1/users/updateMe`, body);
  try {
    dispatch({
      type: EDIT_USER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: EDIT_USER,
      payload: e.res,
    });
  }
};
export const updatePassword = (body) => async (dispatch) => {
  const res = await useUpdateData(`/api/v1/users/changeMyPassword`, body);
  try {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: e.res,
    });
  }
};
