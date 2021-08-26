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
  const isCheckbox = evt.target.type === "checkbox";
  setState((prev) => ({
   ...prev,
   licence: isCheckbox ? evt.target.checked : evt.target.value,
  }));
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
  setState({ email: "", password: "" });
 };

 return (
  <form className={styles.formAuth} onSubmit={onHandleSubmit}>
   <h2 className={styles.title}>
    {location.pathname === "/registration" ? "Registration Page" : "Login Page"}
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
 );
};

export default AuthForm;

// class AuthForm extends Component {
//  state = {
//   email: "",
//   password: "",
//   gender: "female",
//   licence: true,
//  };

//  onHandleChange = (event) => {
//   this.setState({ [event.target.name]: event.target.value });
//  };

//  handleLicenceChange = (evt) => {
//   const isCheckbox = evt.target.type === "checkbox";
//   this.setState({
//    licence: isCheckbox ? evt.target.checked : evt.target.value,
//   });
//  };

//  onHandleSubmit = (event) => {
//   event.preventDefault();
//   this.props.location.pathname === "/registration"
//    ? this.props.registrationUserOperation(
//       {
//        email: this.state.email,
//        password: this.state.password,
//        name: this.state.name,
//       },
//       this.props.history
//      )
//    : this.props.loginUserOperation(
//       {
//        email: this.state.email,
//        password: this.state.password,
//       },
//       this.props.history
//      );

//   this.reset();
//  };

//  reset = () => {
//   this.setState({ email: "", password: "" });
//  };

//  render() {
//   return (
//    <form className={styles.formAuth} onSubmit={this.onHandleSubmit}>
//     <h2 className={styles.title}>
//      {this.props.location.pathname === "/registration"
//       ? "Registration Page"
//       : "Login Page"}
//     </h2>

//     {this.props.location.pathname === "/registration" && (
//      <label className={styles.labelName} htmlFor={this.name}>
//       Name
//       <input
//        onChange={this.onHandleChange}
//        className={styles.inputName}
//        type="text"
//        name="name"
//        value={this.state.name}
//        required
//        placeholder="Enter Name"
//        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//       />
//      </label>
//     )}

//     <label className={styles.labelName} htmlFor={this.email}>
//      Email
//      <input
//       onChange={this.onHandleChange}
//       className={styles.inputName}
//       type="email"
//       name="email"
//       value={this.state.email}
//       required
//       placeholder="Enter email"
//      />
//     </label>
//     <label className={styles.labelName} htmlFor={this.password}>
//      Password
//      <input
//       onChange={this.onHandleChange}
//       className={styles.inputName}
//       type="password"
//       name="password"
//       value={this.state.password}
//       required
//       placeholder="Enter Password"
//      />
//     </label>

//     {this.props.location.pathname === "/registration" && (
//      <>
//       <div className={styles.radioContainer}>
//        <label className={styles.labelName}>
//         <input
//          className={styles.inputName}
//          type="radio"
//          name="gender"
//          value="male"
//          onChange={this.onHandleChange}
//          checked={this.state.gender === "male"}
//         />
//         Мужчина
//        </label>
//        <label className={styles.labelName}>
//         <input
//          className={styles.inputName}
//          type="radio"
//          name="gender"
//          value="female"
//          onChange={this.onHandleChange}
//          checked={this.state.gender === "female"}
//         />
//         Женщина
//        </label>
//       </div>

//       <label className={styles.labelName}>
//        <input
//         className={styles.checkbox}
//         type="checkbox"
//         name="licence"
//         onChange={this.handleLicenceChange}
//         checked={this.state.licence}
//         required
//        />
//        Соглашаюсь с условиями
//       </label>
//      </>
//     )}
//     <button
//      className={styles.buttonGo}
//      type="submit"
//      disabled={!this.state.licence}
//     >
//      {this.props.location.pathname === "/registration"
//       ? "Registration"
//       : "Login"}
//     </button>
//    </form>
//   );
//  }
// }
// const mapStateToProps = (state, ownProps) => ({});

// const mapDispatchToProps = {
//  registrationUserOperation,
//  loginUserOperation,
// };

// export default connect(
//  mapStateToProps,
//  mapDispatchToProps
// )(withRouter(AuthForm));
