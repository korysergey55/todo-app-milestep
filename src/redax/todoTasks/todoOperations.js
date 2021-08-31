import {
  getAllAdvApi,
  createNewAdvApi,
  deleteAdvApi,
  getToggleComletedApi,
  getEditTaskApi,
  getProductByIDApi,
} from "../../services/tasksApi";
import {
  getAllTasks,
  createNewTask,
  getDeleteTask,
  toggleComleted,
  getEditTask,
  getAllTasksError,
  createNewTaskError,
  getDeleteTaskError,
  toggleComletedError,
  getNewEditedTaskError,
} from "./todoActions";

export const getAllTasksOperation =
  () => async (dispatch, getState) => {
    const token = getState().auth.user?.idToken;

    try {
      const response = await getAllAdvApi(token);
      if (response) {
        const allProducts = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
        dispatch(getAllTasks(allProducts));
      }
    } catch (error) {
      dispatch(getAllTasksError(error));
    }
  };

export const getFormAddTaskOperation =
  (id) => async (dispatch, getState) => {
    const token = getState().auth.user?.token;
    try {
      await createNewAdvApi(id, token);
      dispatch(createNewTask(id));
    } catch (error) {
      dispatch(createNewTaskError(error));
    }
  };

export const getDaleteTaskOperation =
  (id) => async (dispatch, getState) => {
    const token = getState().auth.user?.token;
    try {
      await deleteAdvApi(id, token);
      dispatch(getDeleteTask(id));
    } catch (error) {
      dispatch(getDeleteTaskError(error));
    }
  };

export const getUpdateTaskOperation =
  (id, item) => async (dispatch, getState) => {
    const token = getState().auth.user?.token;
    try {
      dispatch(toggleComleted(id));
      await getToggleComletedApi(id, item, token);
    } catch (error) {
      dispatch(getDeleteTaskError(error));
    }
  };

export const getEditTaskOperation =
  (id, item) => async (dispatch, getState) => {
    try {
      await getEditTaskApi(id, item);
      dispatch(getEditTask(null));
    } catch (error) {
      dispatch(toggleComletedError(error));
    }
  };