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
  const token = getState().auth.user?.token;
  try {
   const response = await getAllAdvApi(token);
   //    if (response) {
   //     const allProducts = Object.keys(response).map((key) => ({
   //      id: key,
   //      ...response[key],
   //     }));
   //}

   dispatch(getAllTasks(response.data));
   console.log(response.data);
  } catch (error) {
   dispatch(getAllTasksError(error));
  }
 };

export const getFormAddApiOperation =
 (newAdv) => async (dispatch, getState) => {
  const token = getState().auth.user?.token;
  try {
   await createNewAdvApi(newAdv, token);
   dispatch(createNewTask(newAdv));
  } catch (error) {
   dispatch(createNewTaskError(error));
  }
 };
