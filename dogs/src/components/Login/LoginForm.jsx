import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../hooks/UseForm'
import { UserContext } from '../../contexts/UserContext'

const LoginForm = () => {

  const username = useForm()
  const password = useForm()
  const { userLogin } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>

        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>

      </form>

      <Link to="/login/criar">Criar conta</Link>
      <Link to="/login/perdeu">Perdeu a senha?</Link>
    </section>
  )
}

export default LoginForm
