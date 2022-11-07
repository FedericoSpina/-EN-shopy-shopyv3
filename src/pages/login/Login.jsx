import React from "react";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./Login.module.css";
import SocialMedia from "../../components/social-media/SocialMedia";

const Login = () => {
  const { userForm, handleChange, handleSubmit } = useForm(AuthContext);

  return (
    <>
      <div className={styles.logo}>SHOPY SHOP</div>
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <h1>LOG IN</h1>

          <input
            placeholder="EMAIL"
            type="text"
            name="username"
            value={userForm.username}
            onChange={handleChange}
          ></input>

          <input
            placeholder="PASSWORD"
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
          ></input>

          <button type="submit">LOG IN</button>
          <div className={styles.other}>
            <div className={styles.facebook}>CONTINUE WITH FACEBOOK</div>
            <div className={styles.google}>CONTINUE WITH GOOGLE</div>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <SocialMedia />
      </div>
    </>
  );
};

export default Login;
