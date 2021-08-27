import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import FilterReducer from "./filter/filterReducer";
import tasksReducer from "./todoTasks/todoReducer";

const rootReducer = combineReducers({
 tasks: tasksReducer,
 auth: authReducer,
 filter: FilterReducer,
});

export default rootReducer;