import React from "react";
import { Wrapper } from "../../RootPage";
import styles from "./Login.module.css";

function Login() {
  const value = React.useContext(Wrapper);

  return (
    <div className={styles.login}>
      <div className={styles.darkLayer}>
        <form action="" className={styles.loginBox}>
          <h1>Sign In</h1>
          <input type="email" name="email" placeholder="Email" id="email" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          />
          <input
            type="button"
            value="Sign In"
            onClick={() => {
              value.handleIsLogin(true);
            }}
          />
          <div className={styles.createAccount}>
            <p>Don’t have an account?</p>
            <input type="button" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
