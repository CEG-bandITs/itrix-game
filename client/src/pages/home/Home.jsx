import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../RootPage";
import styles from "./Home.module.css";
import { Logout } from "../../api_calls/Auth";
function Home() {
  const value = React.useContext(Wrapper);
  return <div>{value.isLogin ? <AfterLogin /> : <BeforeLogin />}</div>;
}

function AfterLogin() {
  const value = React.useContext(Wrapper);
  return (
    <div className={styles.after__login}>
      <div className={styles.content1}>
        <div className={styles.hi} title="Chamber of secrets">
          Chamber of secrets
        </div>
        <div className={styles.nav__links}>
          <Link className={styles.btnGrad} to="/game">
            Play Game
          </Link>
          <Link className={styles.other__pages} to="/leaderboard">
            LeaderBoard
          </Link>
          <Link className={styles.other__pages} to="/team">
            Our Team
          </Link>
          <span
            className={styles.other__pages}
            onClick={() => {
              Logout(value.handleIsLogin);
            }}
          >
            Logout
          </span>
        </div>
      </div>

      <div className={styles.image__wrapper}></div>
    </div>
  );
}

function BeforeLogin() {
  const nav = useNavigate();
  const navigate = (page) => {
    setTimeout(() => {
      nav(page);
    }, 1000);
  };
  return (
    <div className={styles.content__wrapper}>
      <div className={styles.content}>
        <p className={styles.content__header}> Chamber Of Secrets </p>
        <div className={styles.row}>
          <div className={styles.column}>
            <div
              onClick={() => navigate("/register")}
              className={`${styles.img} ${styles.img1}`}
            ></div>
            <p> Sign Up</p>
          </div>
          <div className={styles.column}>
            <div
              onClick={() => navigate("/login")}
              className={`${styles.img} ${styles.img2}`}
            ></div>
            <p> Login </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
