import React from 'react'
import styles from "./TasksPageStyled.module.css";
import Filter from '../components/filter/Filter';
import FormAddTasks from "../components/todoTasks/FormAddTasks";
import MarkupTasks from '../components/markupTasks/MarkupTasks';

const TasksPage = () => {
    return (
     <>
      <div className={styles.taskPageContainer}>
       <FormAddTasks />
       <Filter />
       <MarkupTasks/>
      </div>
     </>
    );
}

export default TasksPage;