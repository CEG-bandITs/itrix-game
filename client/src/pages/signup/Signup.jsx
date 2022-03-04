import React, { useState } from "react";
import "./Signup.css";

function Declaration(props) {
  return props.show ? (
    <div className="declaration-form">
      <img src="images/declaration.jpg"></img>
    </div>
  ) : (
    <></>
  );
}

function Signup() {
  const [SignInSuccess, SetSignInSuccess] = useState(true);
  return (
    <>
      <div className="container">
        <h1>Signup</h1>
        <form action="">
          <input type="text" name="fname" id="fname" placeholder="First Name" />
          <input type="text" name="lname" id="lname" placeholder="Last Name" />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="Contact Number"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="text"
            name="clg"
            id="clg"
            placeholder="College (If you're student)"
          />
          <input
            type="password"
            name="passwd"
            id="passwd"
            placeholder="Password"
          />
          <input
            type="password"
            name="cpasswd"
            id="cpasswd"
            placeholder="Confirm Password"
          />
          <input type="button" value="Sign Up" />
          <div className="aldready-having-account">
            <p>Already have an account?</p>
            <input type="button" value="SignIn" />
          </div>
        </form>
      </div>
      <Declaration show={SignInSuccess} />
    </>
  );
}

export default Signup;
