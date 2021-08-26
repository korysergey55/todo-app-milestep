import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
} from "./authActions";

const registerReducer = createReducer(null, {
 [registerUserAction]: (state, action) => action.payload,
});

const tokenReducer = createReducer(null, {
 [loginUserAction]: (state, action) => action.payload.idToken,
 [logoutUserAction]: (state, action) => null,
});

const userReducer = createReducer(null, {
 [loginUserAction]: (state, action) => action.payload,
 [logoutUserAction]: (state, action) => null,
});

const errorReducer = createReducer(null, {
 [registerUserActionError]: (state, action) => action.payload,
 [loginUserActionError]: (state, action) => action.payload,
 [logoutUserAction]: (state, action) => action.payload,
});

const authReducer = combineReducers({
 token: tokenReducer,
 user: userReducer,
 registration: registerReducer,
 error: errorReducer,
});

export default authReducer;
