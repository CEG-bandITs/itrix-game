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

  //value to context for using in all childer component without passing as props
  const value = {
    isLogin: isLogin,
    handleIsLogin: handleIsLogin,
    isloading: isLoading,
    handleIsLoading: handleIsLoading,
  };

  useEffect(() => {
    VerifyLogin().then(handleIsLogin(true));
  }, []);

  //this effect will happen whenever you refresh the page
  return (
    <React.Fragment>
      <Wrapper.Provider value={value}>
        <Suspense fallback={<Loader />}>
          {isLogin ? <Routing /> : <Loader />}
        </Suspense>
      </Wrapper.Provider>
    </React.Fragment>
  );
}
