import React, { useState, useEffect, Suspense } from 'react'
import { VerifyLogin } from './api_calls/Auth'
import Loader from '../src/components/loader/Loader'
const Routing = React.lazy(() => {
  return import('./routing/Routing')
})

export const Wrapper = React.createContext()

export default function RootPage() {
  const [isLoading, handleIsLoading] = useState(true)
  const [isLogin, handleIsLogin] = useState(false)
  const [userData, handleUserData] = useState(null)
  const value = {
    isLogin: isLogin,
    handleIsLogin: handleIsLogin,
    isloading: isLoading,
    handleIsLoading: handleIsLoading,
    userData: userData,
    handleUserData: handleUserData,
  }

  useEffect(() => {
    VerifyLogin().then((response) => {
      handleIsLogin(response[0])
      handleIsLoading(false)
    })
  }, [])

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])
  return (
    <>
      <Wrapper.Provider value={value}>
        <Suspense fallback={<Loader />}>
          {isLoading ? <Loader /> : <Routing />}
        </Suspense>
      </Wrapper.Provider>
    </>
  )
}
