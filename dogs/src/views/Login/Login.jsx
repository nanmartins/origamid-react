import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './Login.module.css'
import LoginForm from '../../components/Login/LoginForm'
import LoginCreate from '../../components/Login/LoginCreate'
import LoginPasswordLost from '../../components/Login/LoginPasswordLost'
import LoginPasswordReset from '../../components/Login/LoginPasswordReset'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={ <LoginCreate />} />
        <Route path="perdeu" element={ <LoginPasswordLost /> } />
        <Route path="resetar" element={ <LoginPasswordReset /> } />
      </Routes>
    </div>
  )
}

export default Login
