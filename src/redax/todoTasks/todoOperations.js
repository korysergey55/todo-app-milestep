import {
 getAllAdvApi,
 createNewAdvApi,
 deleteAdvApi,
 getProductByIDApi,
} from "../../services/tasksApi";
import {
 getAllTasks,
 getAllTasksError,
 createNewTask,
 createNewTaskError,
 handleDeleteTask,
 handleDeleteTaskError,
} from "./todoActions";

export const getAllAdvByCategoryApiOperation =
 () => async (dispatch, getState) => {
  const token = getState().auth.user.idToken;
  try {
   const response = await getAllAdvApi(token);
   dispatch(getAllTasks(response.data));
  } catch (error) {
   dispatch(getAllTasksError(error));
  }
 };

export const getFormAddApiOperation =
 (newAdv) => async (dispatch, getState) => {
  const token = getState().auth.user.idToken;
  try {
   const response = await createNewAdvApi(newAdv, token);
   dispatch(createNewTask(response.data));
  } catch (error) {
   dispatch(getAllTasksError(error));
  }
 };
