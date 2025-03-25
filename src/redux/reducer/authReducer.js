import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from "../action/authActions";

const initialState = {
  username: null,
  registered: false,
  logged: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  console.log(`[REDUCER] - ${action.type}, `, action.payload);

  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, logged: true, error: null , username: action.payload};
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
