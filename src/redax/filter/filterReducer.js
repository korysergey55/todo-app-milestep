import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setFilter, setFilterCompleted, setFilterError, setFilterCompletedError } from "../filter/filterActions";

const productsFilerReducer = createReducer("", {
    [setFilter]: (state, action) => action.payload,
});


const productsCompletedFilerReducer = createReducer(null, {
    [setFilterCompleted]: (state, action) => action.payload,
});

const productsFilerReducerError = createReducer("", {
    [setFilterError]: (state, action) => action.payload,
    [setFilterCompletedError]: (state, action) => action.payload,
});

const filterReducer = combineReducers({
    filter: productsFilerReducer,
    completed: productsCompletedFilerReducer,
    filterError: productsFilerReducerError,
});
export default filterReducer;
