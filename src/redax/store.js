import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReduser";
import {
 FLUSH,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
 REHYDRATE,
} from "redux-persist/es/constants";

const middleware = [
 ...getDefaultMiddleware({
  serializableCheck: {
   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
 }),
];

const store = configureStore({ reducer: rootReducer, middleware });
const persistor = persistStore(store);
export { store, persistor };
