import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
 createNewTask,
 createNewTaskError,
 getAllTasks,
 getAllTasksError,
 handleDeleteTask,
 handleDeleteTaskError,
} from "./todoActions";

const taskItemsReducer = createReducer([], {
 [getAllTasks]: (state, action) => action.payload,
 [createNewTask]: (state, action) => [ action.payload, ...state],
 [handleDeleteTask]: (state, action) =>
  state.filter((task) => task.id !== action.payload),
});

const taskItemsReducerError = createReducer([], {
 [getAllTasksError]: (state, action) => action.payload,
 [createNewTaskError]: (state, action) => action.payload,
 [handleDeleteTaskError]: (state, action) => action.payload,
});

const tasksReducer = combineReducers({
 tasks: taskItemsReducer,
 tasksError: taskItemsReducerError,
});

export default tasksReducer;
