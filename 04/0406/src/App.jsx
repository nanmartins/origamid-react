import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'
import Radio from './Form/Radio'
import Checkbox from './Form/Checkbox'

function App() {

  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [frutas, setFrutas] = React.useState('')
  const [linguagens, setLinguagens] = React.useState([])
  const [termos, setTermos] = React.useState([])
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)


  const validateCep = ((value) => {
    if(value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('CEP inválido.')
      return false
    } else {
      setError(null)
      return true
    }
  })

  const handleBlur = (({target}) => {
    validateCep(target.value)
  })

  const handleChange = (({target}) => {
    if(error) validateCep(target.value)
    setCep(target.value)
  })

  const handleSubmit = ((e) => {
    e.preventDefault()
    if(validateCep(cep)) {
      console.log('enviou')
    } else {
      console.log('erro')
    }
  })


  if(termos.length > 0) {
    console.log('Enviar')
  }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        value={cep}
        setValue={setCep}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <br />
      <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>


      <form style={{width: '175px'}}>
        <Input
          id="nome"
          label="Nome"
          value={nome}
          setValue={setNome}
          required
        />
        <Input
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
          required
        />

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

        <div>
          <h3>Checkbox</h3>
          <Checkbox
            options={['JavaScript', 'React', 'VueJS']}
            value={linguagens}
            setValue={setLinguagens}
          />
          <br />
          <Checkbox
            options={['Li e aceito os termos.']}
            value={termos}
            setValue={setTermos}
          />
        </div>

        <button type="submit" style={{margin: '15px auto 0 auto'}}>Enviar</button>
      </form>
    </>
  )
}

export default App
