import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import Game from '../pages/game/Game'
import Leaderboard from '../pages/leaderboard/Leaderboard'
import Login from '../pages/login/Login'
import Rules from '../pages/rules/Rules'
import Signup from '../pages/signup/Signup'
import { Wrapper } from '../RootPage'

function Routing() {
  const values = React.useContext(Wrapper)
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
  )
}

function AuthenticatedRoute() {
  return (
    <Routes>
      <Route element={<Game />} path="/game"></Route>
      <Route element={<Leaderboard />} path="/leaderboard"></Route>
      <Route element={<Home />} path="/"></Route>
      <Route element={<Rules />} path="/rules"></Route>
      <Route element={<Navigate to="/" />} path="/*"></Route>
    </Routes>
  )
}

function UnAuthenticatedRoute() {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<Login />} path="/login"></Route>
      <Route element={<Signup />} path="/register"></Route>
      <Route element={<Leaderboard />} path="/leaderboard"></Route>
      <Route element={<Rules />} path="/rules"></Route>
      <Route element={<Navigate to="/" />} path="/*"></Route>
    </Routes>
  )
}

export default Routing
