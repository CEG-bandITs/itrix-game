import React, { useState, useEffect, Suspense } from "react";
const Routing = React.lazy(() => {
  return import("./routing/Routing");
});
import { VerifyLogin } from "./api_calls/Auth";
import Loader from "../src/components/loader/Loader";

export const Wrapper = React.createContext();

export default function RootPage() {
  //intial states
  const [isLoading, handleIsLoading] = useState(true);
  const [isLogin, handleIsLogin] = useState(false);
  const [userData, handleUserData] = useState(null);
  //value to context for using in all childer component without passing as props
  const value = {
    isLogin: isLogin,
    handleIsLogin: handleIsLogin,
    isloading: isLoading,
    handleIsLoading: handleIsLoading,
    userData: userData, //user data for storing game details
    handleUserData: handleUserData,
  };

  // On Mount Verfy The Login
  useEffect(() => {
    VerifyLogin().then((response) => {
      handleIsLogin(response[0]);
      handleIsLoading(false);
      handleUserData(response[1]);
    });
  }, []);

  return (
    <React.Fragment>
      <Wrapper.Provider value={value}>
        <Suspense fallback={<Loader />}>
          {isLoading ? <Loader /> : <Routing />}
        </Suspense>
      </Wrapper.Provider>
    </React.Fragment>
  );
}
