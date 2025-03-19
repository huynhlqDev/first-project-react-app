import { loginApi } from "../../service/AuthAPIService";
import localStorageManager from "../../util/LocalStorageManager"; 

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => async (dispatch) => {
  try {
    const data = await loginApi(username, password);
    // 1. save token
    localStorageManager.setToken(data.result.token);

    // 2. save user

    dispatch({ type: LOGIN_SUCCESS, payload: data.code });

  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => {
  localStorageManager.clear()
  return { type: LOGOUT };
};
