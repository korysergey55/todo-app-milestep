import React from "react";
import AuthForm from "../components/auth/AuthForm";
import styles from "../pages/AuthPageStyled.module.css";
const AuthPage = () => {
 return (
  <>
   <div className={styles.authPageContainer}>
    <AuthForm />
   </div>
  </>
 );
};

export default AuthPage;
