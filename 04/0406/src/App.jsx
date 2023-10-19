import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'

function App() {

  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')

  return (
    <>
      <form style={{width: '175px'}}>
        <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
        <Input id="email" label="Email" value={email} setValue={setEmail} required />

        <div>
          <Select options={['Notebook', 'Smartphone', 'Tablet']} value={produto} setValue={setProduto}/>
        </div>

        <button type="submit" style={{margin: '15px auto 0 auto'}}>Enviar</button>
      </form>
    </>
  )
}

export default App
