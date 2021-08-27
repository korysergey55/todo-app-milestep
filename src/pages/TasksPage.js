import React, { useEffect } from "react";
import styles from "./TasksPageStyled.module.css";
import Filter from "../components/filter/Filter";
import FormAddTasks from "../components/todoTasks/FormAddTasks";
import MarkupTasks from "../components/markupTasks/MarkupTasks";

import { useDispatch } from "react-redux";
import { getAllAdvByCategoryApiOperation } from "../redax/todoTasks/todoOperations";

const TasksPage = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getAllAdvByCategoryApiOperation());
 }, [dispatch]);
 return (
  <>
   <div className={styles.taskPageContainer}>
    <FormAddTasks />
    <Filter />
    <MarkupTasks />
   </div>
  </>
 );
};

export default TasksPage;
