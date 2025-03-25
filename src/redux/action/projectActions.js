import { addProjectApi, fetchProjectsApi } from "../../service/projectService";

export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAIL = "FETCH_PROJECTS_FAIL";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAIL = "ADD_PROJECT_FAIL";

// Action để fetch danh sách projects
export const fetchProjects = () => async (dispatch) => {
  try {
    const projects = await fetchProjectsApi();
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: projects });
  } catch (error) {
    dispatch({ type: FETCH_PROJECTS_FAIL, payload: error.message });
  }
};

export const addProject = (
  identifier,
  name,
  description,
  startDate,
  endDate
) => async (dispatch) => {
  try {
    const created = await addProjectApi(
      identifier,
      name,
      description,
      startDate,
      endDate
    );
    dispatch({ type: ADD_PROJECT_SUCCESS, payload: created });
  } catch (error) {
    dispatch({ type: ADD_PROJECT_FAIL, payload: error.message });
  }
};
