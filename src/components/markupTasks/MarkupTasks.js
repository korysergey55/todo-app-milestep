import React from "react";
import styles from "./MarcupTaskStyled.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteTask } from "../../redax/todoTasks/todoActions";
import { getTaskFilteredSelector } from "../../redax/filter/filterSelectors";

const MarkupTasks = () => {
 const dispatch = useDispatch();
 const newItems = useSelector(getTaskFilteredSelector);
 return (
  <div className={styles.markupTaskContainer}>
   <ul className={styles.ulContainer}>
    {newItems?.map((item) => ( 
     <li className={styles.newTask} key={item.name}>
      <p className={styles.completed}>Completed</p>
      <input
       className={styles.checkboxTask}
       type="checkbox"
       name="licence"
       required
      />
      <h2 className={styles.newTasktName}>Title - {item.name}</h2>
      <p className={styles.newTaskText}>Task - {item.taskText}</p>
      <button
       type="button"
       className={styles.btnTask}
       onClick={() => dispatch(handleDeleteTask(item.id))}
      >
       Delete task
      </button>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default MarkupTasks;
