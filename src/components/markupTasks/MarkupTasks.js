import React from "react";
import styles from "./MarcupTaskStyled.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks, getEditTask } from "../../redax/todoTasks/todoActions";
import { getFilteredByCompletedSelector, getFilteredByTitleSelector } from "../../redax/filter/filterSelectors";
import { useState } from "react";
import { getAllTasksOperation, getDaleteTaskOperation, getEditTaskOperation, getUpdateTaskOperation } from "../../redax/todoTasks/todoOperations";
import { editTaskSelector } from "../../redax/todoTasks/todoSelectors";
import { useEffect } from "react";


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
  const itemsCompleted = useSelector(getFilteredByCompletedSelector);
  const editItem = useSelector(editTaskSelector);

  useEffect(() => {
    dispatch(getAllTasksOperation());
  }, [dispatch, newItems]);

  const handleChange = (evt) => {
    setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleSubmitEdit = (id, item) => {
    setState(item);
    dispatch(getEditTaskOperation(id, state));
  }

  const onHandleChangeCompleted = () => {
    dispatch(getAllTasks(itemsCompleted))
  }
  return (
    <div className={styles.markupTaskContainer}>
      <ul className={styles.ulContainer}>
        <li className={styles.newTask} >
          <label className={styles.checkboxTaskCompletedLabel}> Completed only
            <input
              className={styles.checkboxTaskCompletedInput}
              type="checkbox"
              name="completed"
              onChange={() => onHandleChangeCompleted()}
            />
          </label>
        </li>
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

            {editItem?.id === item.id ? (<button
              className={styles.btnEdit}
              type="button"
              onClick={() => handleSubmitEdit(item.id, item)}
            >Submit edit
            </button>) :
              (<button
                className={styles.btnEdit}
                type="button"
                onClick={()=>dispatch(getEditTask(item))}
              >Edit Title
              </button>)}

            {editItem?.id === item.id ? (<input
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
