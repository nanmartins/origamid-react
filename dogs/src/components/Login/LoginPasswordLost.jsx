import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helpers/Error'
import UseForm from '../../Hooks/UseForm'
import UseFetch from '../../Hooks/UseFetch'
import { PASSWORD_LOST } from '../../data/Data'
import Head from '../../components/Helpers/Head'


const LoginPasswordLost = () => {

  const { data, loading, error, request } = UseFetch()
  const login = UseForm()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      })
      const { json } = await request(url, options)
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost
