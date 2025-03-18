import { loginApi } from "../../service/AuthAPIService";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => async (dispatch) => {
  try {
    const data = await loginApi(username, password);
    dispatch({ type: LOGIN_SUCCESS, payload: data.token });
    localStorage.setItem("token", data.token); // Lưu token vào localStorage
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
