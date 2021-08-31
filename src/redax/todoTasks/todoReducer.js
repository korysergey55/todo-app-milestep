import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
   createNewTask,
   getAllTasks,
   getDeleteTask,
   toggleComleted,
   getEditTask,
   getNewEditedTask,
   getAllTasksError,
   createNewTaskError,
   getDeleteTaskError,
   toggleComletedError,
   getEditTaskError,
   getNewEditedTaskError,
} from "./todoActions";

const taskItemsReducer = createReducer([], {
   [getAllTasks]: (state, action) => action.payload,
   [createNewTask]: (state, action) => [action.payload, ...state],
   [getDeleteTask]: (state, action) =>
      state.filter((task) => task.id !== action.payload),
   [toggleComleted]: (state, action) => state.map((task) =>
      task.id === action.payload ? { ...task, completed: !task.completed } : task),
});

const editTaskItemsReducer = createReducer(null, {
   [getEditTask]: (state, action) => action.payload,
   [getNewEditedTask]: (state, action) => action.payload,
})

const taskItemsReducerError = createReducer([], {
   [getAllTasksError]: (state, action) => action.payload,
   [createNewTaskError]: (state, action) => action.payload,
   [getDeleteTaskError]: (state, action) => action.payload,
   [toggleComletedError]: (state, action) => action.payload,
   [getEditTaskError]: (state, action) => action.payload,
   [getNewEditedTaskError]: (state, action) => action.payload,
});

const tasksReducer = combineReducers({
   tasks: taskItemsReducer,
   tasksError: taskItemsReducerError,
   edit: editTaskItemsReducer,
});

export default tasksReducer;
