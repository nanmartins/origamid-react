import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/UseForm'
import { UserContext } from '../../contexts/UserContext'
import Error from '../Helpers/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Head from '../../components/Helpers/Head'


const LoginForm = () => {

  const username = useForm()
  const password = useForm()
  const { userLogin, error, loading } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Login" />
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>

        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Usuário ou senha incorretos.'} />
      </form>

      <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a senha?</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se aqui.</p>
        <Link to="/login/criar" className={stylesBtn.button} style={{ textAlign: 'center'}}>Cadastro</Link>
      </div>

    </section>
  )
}

export default LoginForm
