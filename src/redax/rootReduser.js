import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import tasksReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
 tasks: tasksReducer,
 auth: authReducer,
});

export default rootReducer;