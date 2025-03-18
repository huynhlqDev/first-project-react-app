import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../action/authActions";

const initialState = {
  token: localStorage.getItem("token") || null,
  error: "error mesage",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, error: null };
    case LOGIN_FAIL:
      return { ...state, token: null, error: action.payload };
    case LOGOUT:
      return { ...state, token: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
