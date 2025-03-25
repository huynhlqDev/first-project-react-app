import { loginApi, registerApi } from "../../service/authAPIService";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const login = (username, password) => async (dispatch) => {
  console.log(`[ACTION] - login: ${username}`);
  
  try {
    const data = await loginApi(username, password);
    // 1. save token
    localStorage.setItem("TOKEN", data.result.token);
    localStorage.setItem("USERNAME", data.result.user.username);

    // 2. save user

    dispatch({ type: LOGIN_SUCCESS, payload: data.result.user.username });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => {
  console.log(`[ACTION] - logout`);
  localStorage.clear();
  return { type: LOGOUT };
};

export const register = (fullName, username, password) => async (dispatch) => {
  try {
    const data = await registerApi(fullName, username, password);
    console.log(`[ACTION] - data: ${data}`);
    // localStorage.setItem("TOKEN", data.result.token);
    dispatch({ type: REGISTER_SUCCESS, payload: true });
  }
  catch (error) {
    console.log(`[ACTION] - error: ${error}`);
    dispatch({ type: REGISTER_FAIL, payload: error.message });
  }
}
