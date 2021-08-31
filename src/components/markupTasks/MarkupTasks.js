import React from "react";
import styles from "./MarcupTaskStyled.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getEditTask } from "../../redax/todoTasks/todoActions";
import { getFilteredByCompletedSelector, getFilteredByNotCompletedSelector, getFilteredByTitleSelector } from "../../redax/filter/filterSelectors";
import { useState } from "react";
import { getDaleteTaskOperation, getEditTaskOperation, getUpdateTaskOperation } from "../../redax/todoTasks/todoOperations";
import { editTaskSelector } from "../../redax/todoTasks/todoSelectors";


const MarkupTasks = () => {
  const initialState = {
    id: "",
    name: "",
    taskText: "",
    completed: false,
  };
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const newItems = useSelector(getFilteredByTitleSelector);
  const newItemsCompleted = useSelector(getFilteredByCompletedSelector);
  const newItemsNotCompleted = useSelector(getFilteredByNotCompletedSelector);
  const edit = useSelector(editTaskSelector);


  const handleChange = (evt) => {
    setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleSubmitEdit = (id, item) => {
    setState(item);
    dispatch(getEditTaskOperation(id, state));
  }

  return (
    <div className={styles.markupTaskContainer}>
      <ul className={styles.ulContainer}>
        {newItems?.map((item) => (
          <li className={styles.newTask} key={item.id}>
            <p className={styles.completed}>Completed</p>
            <input
              className={styles.checkboxTask}
              onChange={() => dispatch(getUpdateTaskOperation(item.id, item))}
              type="checkbox"
              name="completed"
              checked={item.completed}
            />

            {edit?.id === item.id ? (<button
              className={styles.btnEdit}
              type="button"
              onClick={() => handleSubmitEdit(item.id, item)}
            >Submit edit
            </button>) : (<button
              className={styles.btnEdit}
              type="button"
              onClick={() => dispatch(getEditTask(item))}
            >Edit Task
            </button>)}

            {edit?.id === item.id ? (<input
              className={styles.inputEditName}
              type="text"
              name="name"
              placeholder="Enter New title Task"
              onChange={handleChange}
            />) : (<h2 className={styles.newTasktName}>Title - {item.name}</h2>)}

            <p className={styles.newTaskText}>Task - {item.taskText}</p>
            <button
              type="button"
              className={styles.btnTask}
              onClick={() => dispatch(getDaleteTaskOperation(item.id))}
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



	// const handleLicenceChange = (evt) => {
	//   const isCheckbox = evt.target.type === "checkbox";
	//   setState((prev) => ({...prev, completed: isCheckbox ? evt.target.checked : evt.target.value}));
	//  };

	// const handleLicenceChange = (id, evt) => {
	//   setState((prev) => ({ ...prev, completed: !prev.completed }));
	// };
	// const handleLicenceChange = (id, evt) => {
	//   setState((prev) => ({
	//     tasks: prev.tasks.map((task) =>
	//       task.id === id ? { ...task, completed: !task.completed } : task)
	//   }));
	// };
