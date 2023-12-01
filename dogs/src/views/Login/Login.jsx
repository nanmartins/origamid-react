import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import styles from './Login.module.css'
import LoginForm from '../../components/Login/LoginForm'
import LoginCreate from '../../components/Login/LoginCreate'
import LoginPasswordLost from '../../components/Login/LoginPasswordLost'
import LoginPasswordReset from '../../components/Login/LoginPasswordReset'
import { UserContext } from '../../contexts/UserContext'

const Login = () => {

  const {login } = React.useContext(UserContext)

  if(login === true) return <Navigate to="/conta" />

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
