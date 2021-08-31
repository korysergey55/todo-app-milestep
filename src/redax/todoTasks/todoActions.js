import { createAction } from "@reduxjs/toolkit";

export const getAllTasks = createAction("formAddTasks/getAllTask");
export const createNewTask = createAction("formAddTasks/createNewTask");
export const getDeleteTask = createAction("formAddTasks/getDeleteTask");
export const toggleComleted = createAction("toggleComleted");
export const getEditTask = createAction("getEditTask");

export const getAllTasksError = createAction("formAddTasks/getAllTasksError");
export const createNewTaskError = createAction("formAddTasks/createNewTaskError");
export const getDeleteTaskError = createAction("formAddTasks/getDeleteTaskError");
export const toggleComletedError = createAction("toggleComletedError");
export const getEditTaskError = createAction("getEditTaskError");
