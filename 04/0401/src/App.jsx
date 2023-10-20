import React from 'react'

function App() {

  const [user, setUser] = React.useState({})
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  })
  // const [nome, setNome] = React.useState('')
  // const [email, setEmail] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  const handleChange = ({target}) => {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <br />
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <br />

        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
