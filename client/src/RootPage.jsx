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
  const value = {
    isLogin,
    handleIsLogin,
  }

  useEffect(() => {
    ;(async () => {
      const res = await VerifyLogin()
      handleIsLogin(res)
      handleIsLoading(false)
    })()
  }, [])

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
