import { createProjectApi, getProjectsApi } from "../../service/projectService";
import {PROJECT} from '../../util/environment';

export const clear = () => async (dispatch) => {
  dispatch({type: PROJECT.CLEAR})
}

export const getProjects = () => async (dispatch) => {
  dispatch({ type: PROJECT.REQUEST });
  try {
    const data = await getProjectsApi();
    dispatch({ type: PROJECT.GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT.FAILURE, payload: error.message });
  }
};

export const addProject = (project) => async (dispatch) => {

  dispatch({ type: PROJECT.REQUEST });
  try {
    const created = await createProjectApi(project);
    dispatch({ type: PROJECT.CREATE_SUCCESS, payload: created });
  } catch (error) {
    dispatch({ type: PROJECT.FAILURE, payload: error.message });
  }
};

export const updateProject = (projectId, updatedData) => async (dispatch) => {
  dispatch({ type: PROJECT.REQUEST });

  try {
    const res = await fetch(`/api/projects/${projectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();
    dispatch({ type: PROJECT.UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT.FAILURE, payload: error.message });
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  dispatch({ type: PROJECT.REQUEST });

  try {
    await fetch(`/api/projects/${projectId}`, { method: "DELETE" });

    dispatch({ type: PROJECT.DELETE_SUCCESS, payload: projectId });
  } catch (error) {
    dispatch({ type: PROJECT.FAILURE, payload: error.message });
  }
};