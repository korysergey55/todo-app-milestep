import { registrationUserApi, loginUserApi } from "../../services/authApi";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
} from "./authActions";

export const registrationUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await registrationUserApi(InputFormState);
   dispatch(registerUserAction(response.data));
   history.push("/login");
  } catch (error) {
   dispatch(registerUserActionError(error.message));
  }
 };

export const loginUserOperation =
 (InputFormState, history) => async (dispatch) => {
  try {
   const response = await loginUserApi(InputFormState);
   dispatch(loginUserAction(response.data));
   history.push("/tasks");
  } catch (error) {
   dispatch(loginUserActionError(error.message));
  }
 };
