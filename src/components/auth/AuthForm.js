import React from "react";
import styles from "./AuthFormStyled.module.css";

import {
 registrationUserOperation,
 loginUserOperation,
} from "../../redax/auth/authOperations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const AuthForm = () => {
 const initialState = {
  email: "",
  password: "",
  gender: "female",
  licence: true,
 };
 const dispatch = useDispatch();
 const history = useHistory();
 const location = useLocation();
 const [state, setState] = useState(initialState);

 const onHandleChange = (event) => {
  setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
 };

 const handleLicenceChange = (evt) => {
  if (evt.target.type === "checkbox") {
   setState((prev) => ({ ...prev, [evt.target.name]: evt.target.checked }));
   return;
  }
 };

 const onHandleSubmit = (event) => {
  event.preventDefault();
  location.pathname === "/registration"
   ? dispatch(
      registrationUserOperation(
       {
        email: state.email,
        password: state.password,
        name: state.name,
       },
       history
      )
     )
   : dispatch(
      loginUserOperation(
       {
        email: state.email,
        password: state.password,
       },
       history
      )
     );

  reset();
 };

 const reset = () => {
  setState({...initialState});
 };

 return (
  <div className={styles.authFormContainer}>
   <form className={styles.formAuth} onSubmit={onHandleSubmit}>
    <h2 className={styles.title}>
     {location.pathname === "/registration"
      ? "Registration Page"
      : "Login Page"}
    </h2>

    {location.pathname === "/registration" && (
     <label className={styles.labelName}>
      Name
      <input
       onChange={onHandleChange}
       className={styles.inputName}
       type="text"
       name="name"
       value={state.name}
       required
       placeholder="Enter Name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
     </label>
    )}

    <label className={styles.labelName}>
     Email
     <input
      onChange={onHandleChange}
      className={styles.inputName}
      type="email"
      name="email"
      value={state.email}
      required
      placeholder="Enter email"
     />
    </label>
    <label className={styles.labelName}>
     Password
     <input
      onChange={onHandleChange}
      className={styles.inputName}
      type="password"
      name="password"
      value={state.password}
      required
      placeholder="Enter Password"
     />
    </label>

    {location.pathname === "/registration" && (
     <>
      <div className={styles.radioContainer}>
       <label className={styles.labelName}>
        <input
         className={styles.inputName}
         type="radio"
         name="gender"
         value="male"
         onChange={onHandleChange}
         checked={state.gender === "male"}
        />
        Мужчина
       </label>
       <label className={styles.labelName}>
        <input
         className={styles.inputName}
         type="radio"
         name="gender"
         value="female"
         onChange={onHandleChange}
         checked={state.gender === "female"}
        />
        Женщина
       </label>
      </div>

      <label className={styles.labelName}>
       <input
        className={styles.checkbox}
        type="checkbox"
        name="licence"
        onChange={handleLicenceChange}
        checked={state.licence}
        required
       />
       Соглашаюсь с условиями
      </label>
     </>
    )}
    <button className={styles.buttonGo} type="submit" disabled={!state.licence}>
     {location.pathname === "/registration" ? "Registration" : "Login"}
    </button>
   </form>
  </div>
 );
};

export default AuthForm;
