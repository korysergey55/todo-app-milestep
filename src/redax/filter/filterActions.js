import { createAction } from "@reduxjs/toolkit";

const setFilter = createAction("setFilter");
const setFilterError = createAction("setFilterError");

export { setFilter, setFilterError };
