import { loginApi } from "../../service/authAPIService";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => async (dispatch) => {
  console.log(`[ACTION] - login: ${username}`);
  
  try {
    const data = await loginApi(username, password);
    // 1. save token
    localStorage.setItem("TOKEN", data.result.token);

    // 2. save user

    dispatch({ type: LOGIN_SUCCESS, payload: data.code });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => {
  console.log(`[ACTION] - logout`);
  localStorage.clear();
  return { type: LOGOUT };
};
