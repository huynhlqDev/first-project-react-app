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

// console.log(`[ACTION] - login: ${username}`);
  
//   try {
//     const data = await loginApi(username, password);
//     // 1. save token
//     localStorage.setItem("TOKEN", data.result.token);

//     // 2. save user

//     dispatch({ type: LOGIN_SUCCESS, payload: data.code });
//   } catch (error) {
//     dispatch({ type: LOGIN_FAIL, payload: error.message });
//   }