import React from "react";
import { Login__ } from "../../api_calls/Auth";
import { Wrapper } from "../../RootPage";
import styles from "./Login.module.css";

function Login() {
  const value = React.useContext(Wrapper);
  const [Error, handleError] = React.useState("");
  //password adn email
  const [password, handlePassword] = React.useState("");
  const [email, handleEmail] = React.useState("");
  //disabling button after submit
  const [disableButton, handleDisableButton] = React.useState(false);

  //errors
  const [emailError, handleEmailError] = React.useState("initial");
  const [passwordError, handlePasswordError] = React.useState("initial");

  //setting for not getting fields in error mode
  const [initial, handleInitial] = React.useState(true);

  const handleSubmit = () => {
    if (passwordError === "" && emailError === "") {
      const data = { email: email, password: password };
      Login__(data).then((response) => {
        if (response[0] === true) {
          value.handleIsLogin(true);
        } else {
          handleDisableButton(false);
          handleError(response[1]);
        }
      });
      handleDisableButton(true);
    }
    if (emailError === "initial") {
      handleEmailError("empty email");

      document.getElementById("email").style.border = "1px solid red";
    }
    if (passwordError === "initial") {
      handlePasswordError("empty password");
      document.getElementById("password").style.border = "1px solid red";
    }
  };

  React.useEffect(() => {
    if (initial !== true) {
      if (!email.endsWith("@gmail.com")) {
        document.getElementById("email").style.border = "1px solid red";
        handleEmailError("invalid email");
      } else if (email.endsWith("@gmail.com") && email.length >= 15) {
        document.getElementById("email").style.border = "2px solid green";
        handleEmailError("");
      } else {
        document.getElementById("email").style.border = "none";
        handleEmailError("");
      }
    } else handleInitial(false);
  }, [email]);

  React.useEffect(() => {
    if (initial !== true) {
      if (password.length < 8) {
        document.getElementById("password").style.border = "1px solid red";
        handlePasswordError("weak password ,length should be atleast 8");
      } else if (password.length >= 8) {
        handlePasswordError("");
        document.getElementById("password").style.border = "2px solid green";
      } else {
        document.getElementById("password").style.border = "none";
        handlePasswordError("");
      }
    } else handleInitial(false);
  }, [password]);

  return (
    <div className={styles.login}>
      <div className={styles.darkLayer}>
        <form action="" className={styles.loginBox}>
          <h1>Sign In</h1>
          <span className={styles.Error}>{Error}</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              handleEmail(e.target.value);
            }}
            id="email"
          />
          <span className={styles.Error}>
            {" "}
            {emailError !== "initial" && emailError}
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            id="password"
            onChange={(e) => {
              handlePassword(e.target.value);
            }}
          />
          <span className={styles.Error}>
            {passwordError !== "initial" && passwordError}
          </span>

          <input
            type="button"
            value={disableButton ? "please wait.." : "Sign In"}
            onClick={handleSubmit}
            disabled={disableButton}
            style={{ opacity: disableButton && 0.5 }}
          />

          <div className={styles.createAccount}>
            <p>Don’t have an account?</p>
            <input type="button" value={"Sign Up"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
