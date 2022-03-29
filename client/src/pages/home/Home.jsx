import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../RootPage";
import "./Home.css";
import { Logout } from "../../api_calls/Auth";
function Home() {
  const value = React.useContext(Wrapper);
  return <div>{value.isLogin ? <AfterLogin /> : <BeforeLogin />}</div>;
}

function AfterLogin() {
  const value = React.useContext(Wrapper);
  return (
    <div className="after__login">
      <div className="content1">
        {value.userData!==null&&value.userData.email}
        <div className="hi" title="Chamber of secrets">
          Chamber of secrets
        </div>
        <div className="nav__links">
          <Link className="btn-grad" to="/game">
            Play Game
          </Link>
          <Link className="other__pages" to="/leaderboard">
            LeaderBoard
          </Link>
          <Link className="other__pages" to="/team">
            Our Team
          </Link>
          <span
            className="other__pages"
            onClick={() => {
              Logout(value.handleIsLogin);
            }}
          >
            Logout
          </span>
        </div>
      </div>

      <div className="image__wrapper"></div>
    </div>
  );
}

function BeforeLogin() {
  const nav = useNavigate();
  const navigate = (page) => {
    setTimeout(() => {
      nav(page);
    }, 2000);
  };
  return (
    <div className="content__wrapper">
      <div className="content">
        <p className="content__header"> Chamber Of Secrets </p>
        <div class="row">
          <div className="column">
            <div
              onClick={() => navigate("/register")}
              className="img img1"
            ></div>
            <p> Sign Up</p>
          </div>
          <div class="column">
            <div onClick={() => navigate("/login")} className="img img2"></div>
            <p> Login </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
