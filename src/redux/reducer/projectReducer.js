import { FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAIL } from "../action/projectActions";

const initialState = {
  projects: [],
  error: null,
};

const projectReducer = (state = initialState, action) => {
    console.log(`[REDUCER] - ${action.type}, `,action.payload);

  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, error: null };
    case FETCH_PROJECTS_FAIL:
      return { ...state, projects: [], error: action.payload };
    default:
      return state;
  }
};

export default projectReducer;