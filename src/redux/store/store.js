import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk } from "redux-thunk";
import authReducer from "../reducer/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
