/* 
This is the default - taken from shadcn webpage

import { LoginForm } from "./components/LoginForm"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
*/


import React from 'react'
import { LoginForm } from './components/LoginForm'

const LoginPage = () => {
  return (
    <div className="flex h-svh items-center">
      <LoginForm />
    </div>
  )
}

export default LoginPage