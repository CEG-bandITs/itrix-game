import React from 'react'
import {Wrapper} from "../../RootPage";

function Login() {
  const value =React.useContext(Wrapper);

  return (
    <div>Login


      <button onClick={()=>{value.handleIsLogin(true)}}>click</button>
    </div>
  )
}

export default Login