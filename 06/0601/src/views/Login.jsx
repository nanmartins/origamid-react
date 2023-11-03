import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Login')
    navigate('/sobre')
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleClick}>Logar</button>
    </div>
  )
}

export default Login
