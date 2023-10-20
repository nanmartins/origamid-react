import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'
import Radio from './Form/Radio'
import Checkbox from './Form/Checkbox'
import useForm from './Hooks/useForm'

function App() {

  // const [nome, setNome] = React.useState('')
  // const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [frutas, setFrutas] = React.useState('')
  const [linguagens, setLinguagens] = React.useState([])
  const [termos, setTermos] = React.useState([])

  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm()
  const sobrenome = useForm(false)







  const handleSubmit = ((e) => {
    e.preventDefault()
    if(cep.validate && email.validate && nome.validate) {
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
        label="Nome"
        id="nome"
        {...nome}
      />
      <br />

      <Input
        type="text"
        label="Sobrenome"
        id="sobrenome"
        {...sobrenome}
      />
      <br />


      <Input
        type="email"
        label="Email"
        id="email"
        {...email}
      />
      <br />

      <Input
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        {...cep}
      />
      <br />

      <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>


      <form style={{width: '175px'}}>
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
