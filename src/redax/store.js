import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReduser";

const store = configureStore({ reducer: rootReducer });
export {store} ;