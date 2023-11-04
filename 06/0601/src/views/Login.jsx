import React from 'react'
import { useNavigate } from 'react-router-dom'
import Head from '../services/Head'

const btnStyle = {
  backgroundColor: 'rgb(25, 150, 25)',
  fontSize: '16px',
  textTransform: 'uppercase',
  color: '#fff',
  border: 'none',
  padding: '15px 25px',
  borderRadius: '5px',
  cursor: 'pointer'
}
const Login = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/sobre')
  }

  return (
    <div>
      <Head title='Login' description='Pagina de login'/>
      <h2>Login</h2>
      <button onClick={handleClick} style={btnStyle}>Logar</button>
    </div>
  )
}

export default Login
