import { FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL, ADD_PROJECT_FAIL, ADD_PROJECT_SUCCESS } from "../action/projectActions";
import { LOGOUT } from "../action/authActions";

const initialState = {
  lastCreated: null,
  projects: [],
  error: null,
};

const projectReducer = (state = initialState, action) => {
  console.log(`[REDUCER] - ${action.type}, `, action.payload);

  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, error: null };
    case FETCH_PROJECTS_FAIL:
      return { ...state, projects: [], error: action.payload };
    case ADD_PROJECT_SUCCESS:
      return { ...state, lastCreated: action.payload, error: null };
    case ADD_PROJECT_FAIL:
      return { ...state, lastCreated: null, error: action.payload };
      case LOGOUT: 
      return { ...state, lastCreated: null, error: null, projects: [] };
    default:
      return state;
  }
};

export default projectReducer;