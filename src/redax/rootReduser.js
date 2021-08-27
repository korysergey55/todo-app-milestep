import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/authReducer";
import filterReducer from "./filter/filterReducer";
import tasksReducer from "./todoTasks/todoReducer";

const persistAuthConfig = {
 key: "token",
 storage,
 whitelist: ["token"],
};
const persistTasksConfig = {
 key: "tasks",
 storage,
 whitelist: ["tasks"],
};

const rootReducer = combineReducers({
 tasks: persistReducer(persistTasksConfig, tasksReducer),
 auth: persistReducer(persistAuthConfig, authReducer),
 filter: filterReducer,
});

export default rootReducer;