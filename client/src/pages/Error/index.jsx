import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function ErrorPage(props) {
  return (
    <div className={style.container}>
      <h1>{props.statusCode}</h1>
      <h2>{props.statusText}</h2>
      <p>
        The Page you are looking for doesn't exist or an other error occured. Go
        to <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
}

export default ErrorPage;
