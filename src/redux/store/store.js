import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk } from "redux-thunk";
import authReducer from "../reducer/authReducer";
import projectReducer from "../reducer/projectReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
