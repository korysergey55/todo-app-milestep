import React from "react";
import styles from "./MarcupTaskStyled.module.css";
import { useDispatch, useSelector } from "react-redux";
import { submitNewTaskSelector } from "../../redax/todoTasks/todoSelectors";
import { handleDeleteTask } from "../../redax/todoTasks/todoActions";

const MarkupTasks = () => {
 const dispatch = useDispatch();
 const newItems = useSelector(submitNewTaskSelector);
 return (
  <div className={styles.markupTaskContainer}>
   <ul className={styles.ulContainer}>
    {newItems?.map((item) => (
     <li className={styles.newTask} key={item.id}>
      <input
       className={styles.checkboxTask}
       type="checkbox"
       name="licence"
       required
      />
      <h2 className={styles.newTasktName}>{item.name}</h2>
      <p className={styles.newTaskText}>{item.taskText}</p>
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
