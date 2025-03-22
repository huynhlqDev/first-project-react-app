import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../action/authActions";

const initialState = {
  logged: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  console.log(`[REDUCER] - ${action.type}, `,action.payload);

  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, logged: true, error: null };
    case LOGIN_FAIL:
      return { ...state, logged: false, error: action.payload };
    case LOGOUT:
      return { ...state, logged: false, error: null };
    default:
      return state;
  }
};

export default authReducer;
