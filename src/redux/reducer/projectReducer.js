import { PROJECT } from "../../util/environment";
const initialState = {
  projects: [],
  isLoading: false,
  error: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT.CLEAR:
      return initialState;
      
    case PROJECT.REQUEST:
      return { ...state, isLoading: true, error: null };

    case PROJECT.GET_SUCCESS:
      return { ...state, isLoading: false, projects: action.payload };

    case PROJECT.CREATE_SUCCESS:
      return { ...state, isLoading: false, projects: [...state.projects, action.payload] };

    case PROJECT.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };

    case PROJECT.DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: state.projects.filter((project) => project.id !== action.payload),
      };

    case PROJECT.FAILURE:
      return { ...state, isLoading: false, error: action.payload }

    default:
      return state;
  }
};

export default projectReducer;
