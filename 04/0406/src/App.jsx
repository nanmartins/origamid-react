import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'
import Radio from './Form/Radio'

function App() {

  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [frutas, setFrutas] = React.useState([])

  return (
    <>
      <form style={{width: '175px'}}>
        <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
        <Input id="email" label="Email" value={email} setValue={setEmail} required />

        <div>
          <Select options={['Notebook', 'Smartphone', 'Tablet']} value={produto} setValue={setProduto}/>
        </div>

        <div>
          <h3>Cores:</h3>
          <Radio
            options={['Azul', 'Vermelho']}
            value={cor}
            setValue={setCor}
          />

          <br />

          <h3>Frutas:</h3>
          <Radio
            options={['Maçã', 'Uva', 'Limão']}
            value={frutas}
            setValue={setFrutas}
          />
        </div>

        <button type="submit" style={{margin: '15px auto 0 auto'}}>Enviar</button>
      </form>
    </>
  )
}

export default App
