import { createAction } from "@reduxjs/toolkit";

const setFilter = createAction("setFilter");
const setFilterError = createAction("setFilterError");

const setFilterCompleted = createAction("setFilterCompleted");
const setFilterCompletedError = createAction("setFilterCompletedError");

export { setFilter, setFilterError, setFilterCompleted, setFilterCompletedError };
