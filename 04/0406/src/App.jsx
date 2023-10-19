import React from 'react'
import Input from './Form/Input'

function App() {

  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <>
      <form style={{width: '175px'}}>
        <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
        <Input id="email" label="Email" value={email} setValue={setEmail} required />

        <button type="submit" style={{margin: '15px auto 0 auto'}}>Enviar</button>
      </form>
    </>
  )
}

export default App
