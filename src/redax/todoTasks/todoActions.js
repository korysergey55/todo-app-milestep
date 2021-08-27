import { createAction } from "@reduxjs/toolkit";


export const createNewTask = createAction("formAddTasks/createNewTask");
export const createNewTaskError = createAction("formAddTasks/createNewTask");

export const getAllTasks = createAction("formAddTasks/getAllTasks");
export const getAllTasksError = createAction("formAddTasks/createNewTask");

export const handleDeleteTask = createAction("formAddTasks/getAllTasks");
export const handleDeleteTaskError = createAction("formAddTasks/handleDeleteTaskError");