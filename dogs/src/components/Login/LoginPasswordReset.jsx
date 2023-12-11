import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helpers/Error'
import UseForm from '../../Hooks/UseForm'
import UseFetch from '../../Hooks/UseFetch'
import { PASSWORD_RESET } from '../../data/Data'
import { useNavigate } from 'react-router-dom'
import Head from '../../components/Helpers/Head'


const LoginPasswordReset = () => {

  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = UseForm()
  const {loading, error, request} = UseFetch()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(password.validate()) {
      const [url, options] = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if(response.ok) navigate('/login')
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  },[])

  return (
    <section className='animeLeft'>
      <Head title="Resete a senha" />
      <h1 className='title'>Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
