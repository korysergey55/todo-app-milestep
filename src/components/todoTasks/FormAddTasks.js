import React from "react";
import styles from "./FormAddTasksStyled.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitNewTaskSelector } from "../../redax/todoTasks/todoSelectors";
import { getFormAddTaskOperation } from "../../redax/todoTasks/todoOperations";

const FormAddTasks = () => {
	const initialState = {
		name: "",
		taskText: "",
		completed: false,
	};
	const dispatch = useDispatch();
	const [state, setState] = useState(initialState);
	const newItems = useSelector(submitNewTaskSelector);

	const handleChange = (evt) => {
		setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
	};

	const findDuplicate = (item) => {
		const isDublicate = newItems?.find((task) => task?.name === item);
		if (!item) {
			alert("The field cannot be empty!");
			return false;
		}
		if (isDublicate) {
			alert("This Name already exist!" + item);
			return false;
		}
		return true;
	};

	const handleSubmitForm = (evt) => {
		evt.preventDefault();
		if (findDuplicate(state.name)) {
			dispatch(getFormAddTaskOperation(state));
		}
		resetForm();
	};

	const resetForm = () => {
		setState({ ...initialState });
	};

	return (
		<div className={styles.FormAddStyledContainer}>
			<form className={styles.mainForm} onSubmit={handleSubmitForm}>
				<div className={styles.inputContainer}>
					<label className={styles.labelName}>Title Task</label>
					<input
						onChange={handleChange}
						type="text"
						name="name"
						value={state.name}
						className={styles.inputName}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
						placeholder="Enter Name"
					></input>
				</div>

				<div className={styles.inputContainer}>
					<label className={styles.labelName}>Task</label>
					<textarea
						onChange={handleChange}
						type="tel"
						name="taskText"
						value={state.taskText}
						className={styles.inputTextarea}
						required
					/>
				</div>
				<button type="submit" className={styles.buttonAddContact}>
					Add New Task
				</button>
				<p className={styles.qantytyContacts}>All My Tasks: {newItems.length}</p>
			</form>
		</div>
	);
};

export default FormAddTasks;
