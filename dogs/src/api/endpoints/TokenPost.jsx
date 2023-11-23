import React from 'react'
// import { json } from 'react-router-dom'

const TokenPost = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [token, setToken] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
      setToken(json.token)
      return json
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder='Nome'
          onChange={({target}) => setUsername(target.value)}
        />

        <input
          type="text"
          value={password}
          placeholder='password'
          onChange={({target}) => setPassword(target.value)}
        />

        <p style={{wordBreak: 'break-all'}}>{token}</p>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default TokenPost
