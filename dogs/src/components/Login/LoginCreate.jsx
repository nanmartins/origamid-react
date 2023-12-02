import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../../hooks/UseForm'
import { USER_POST } from '../../data/Data'
import { UserContext } from '../../contexts/UserContext'

const LoginCreate = () => {

  const username = UseForm()
  const email = UseForm('email')
  const password = UseForm()

  const {userLogin} = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const response = await fetch(url, options)
    if(response.ok) userLogin(username.value, password.value)
    // const json = await response.json()
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>

    </section>
  )
}

export default LoginCreate
