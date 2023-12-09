import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../../Hooks/UseForm'
import Error from '../Helpers/Error'
import { USER_POST } from '../../data/Data'
import { UserContext } from '../../contexts/UserContext'
import UseFetch from '../../Hooks/UseFetch'
import Head from '../../components/Helpers/Head'


const LoginCreate = () => {

  const username = UseForm()
  const email = UseForm('email')
  const password = UseForm()

  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = UseFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if(response.ok) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <Head ttle="Criar conta" />
      <h1 className='title'>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>

    </section>
  )
}

export default LoginCreate
