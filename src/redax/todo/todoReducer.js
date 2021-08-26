import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createNewTask, createNewTaskError } from "./todoActions";

const taskItemsReducer = createReducer([], {
 [createNewTask]: (state, action) => action.payload,
});

const taskItemsReducerError = createReducer([], {
 [createNewTaskError]: (state, action) => action.payload,
});

 const tasksReducer = combineReducers({
  tasks: taskItemsReducer,
  tasksError: taskItemsReducerError,
 });

 export default tasksReducer;