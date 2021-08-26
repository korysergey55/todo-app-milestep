import React from 'react'
import Filter from '../components/filter/Filter';
import AddTodoTasks from '../components/todoTasks/AddTodoTasks';
import styles from "./TasksPageStyled.module.css";
const TasksPage = () => {
    return (
     <>
      <div className={styles.taskPageContainer}>
       <Filter />
       <AddTodoTasks />
      </div>
     </>
    );
}

export default TasksPage;