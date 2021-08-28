import { createAction } from "@reduxjs/toolkit";


export const getAllTasks = createAction("formAddTasks/getAllTask");
export const createNewTask = createAction("formAddTasks/createNewTask");

export const getAllTasksError = createAction("formAddTasks/getAllTasksError");
export const createNewTaskError = createAction("formAddTasks/createNewTaskError");

export const handleDeleteTask = createAction("formAddTasks/handleDeleteTask");
export const handleDeleteTaskError = createAction("formAddTasks/handleDeleteTaskError");