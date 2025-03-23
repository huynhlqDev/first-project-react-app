import { fetchProjectsApi } from "../../service/projectService";

export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAIL = "FETCH_PROJECTS_FAIL";

// Action để fetch danh sách projects
export const fetchProjects = () => async (dispatch) => {
  try {
    const projects = await fetchProjectsApi();
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: projects });
  } catch (error) {
    dispatch({ type: FETCH_PROJECTS_FAIL, payload: error.message });
  }
};
