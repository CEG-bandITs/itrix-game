import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//importing all page components
import Home from "../pages/home/Home";
import Game from "../pages/game/Game";
import Leaderboard from "../pages/leaderboard/Leaderboard";
import Login from "../pages/login/Login";
import Rules from "../pages/rules/Rules";
import Signup from "../pages/signup/Signup";
import Team from "../pages/team/Team";
import ErrorPage from "../pages/Error";

//importing context from home page
import { Wrapper } from "../RootPage";

function Routing() {
  const values = React.useContext(Wrapper);
  return (
    <>
      <BrowserRouter>
        {values.isLogin === true ? (
          <AuthenticatedRoute />
        ) : (
          <UnAuthenticatedRoute />
        )}
      </BrowserRouter>
    </>
  );
}

function AuthenticatedRoute() {
  return (
    <Routes>
      <Route element={<Game />} exact path="/game"></Route>
      <Route element={<Team />} exact path="/team"></Route>
      <Route element={<Leaderboard />} exact path="/leaderboard"></Route>
      <Route element={<Home />} exact path="/"></Route>
      <Route element={<Rules />} exact path="/rules"></Route>
      <Route element={<ErrorPage />} path="*"></Route>
    </Routes>
  );
}

function UnAuthenticatedRoute() {
  return (
    <Routes>
      <Route element={<Home />} exact path="/"></Route>
      <Route element={<Login />} exact path="/login"></Route>
      <Route element={<Signup />} exact path="/register"></Route>
      <Route element={<Rules />} exact path="/rules"></Route>
      <Route element={<ErrorPage />} path="*"></Route>
    </Routes>
  );
}

export default Routing;
