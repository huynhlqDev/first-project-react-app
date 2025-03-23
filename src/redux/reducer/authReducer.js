import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from "../action/authActions";

const initialState = {
  registered: false,
  logged: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  console.log(`[REDUCER] - ${action.type}, `, action.payload);

  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, logged: true, error: null };
    case LOGIN_FAIL:
      return { ...state, logged: false, error: action.payload };
    case LOGOUT:
      return { ...state, logged: false, error: null };
    case REGISTER_SUCCESS:
      return { ...state, registered: true, error: null };
    case REGISTER_FAIL:
      return {...state, registered: false, error: action.payload};
    default:
      return state;
  }
};

export default authReducer;
