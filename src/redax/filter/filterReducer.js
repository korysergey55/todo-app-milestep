import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setFilter, setFilterError } from "../filter/filterActions";

const productsFilerReducer = createReducer("", {
 [setFilter]: (state, action) => action.payload,
});

const productsFilerReducerError = createReducer("", {
 [setFilterError]: (state, action) => action.payload,
});

const FilterReducer = combineReducers({
 filter: productsFilerReducer,
 filterError: productsFilerReducerError,
});
export default FilterReducer;
