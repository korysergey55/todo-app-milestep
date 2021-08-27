import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setFilter, setFilterError } from "../filter/filterActions";

const productsFilerReducer = createReducer("", {
 [setFilter]: (state, action) => action.payload,
});

const productsFilerReducerError = createReducer("", {
 [setFilterError]: (state, action) => action.payload,
});

const filterReducer = combineReducers({
 filter: productsFilerReducer,
 filterError: productsFilerReducerError,
});
export default filterReducer;
