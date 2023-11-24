import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
      return json
    })
  }

  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RvZ3NhcGkub3JpZ2FtaWQuZGV2IiwiaWF0IjoxNzAwNzk0NTQxLCJuYmYiOjE3MDA3OTQ1NDEsImV4cCI6MTcwMDg4MDk0MSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMTUifX19.wU2XT0yfFDW4w22yPmpLirXhhVyvrF7lP38AejZHxg4

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />

        <button>Entrar</button>
      </form>

      <Link to="/login/criar">Criar conta</Link>
      <Link to="/login/perdeu">Perdeu a senha?</Link>
    </section>
  )
}

export default LoginForm
