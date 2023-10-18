// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

import React from 'react'

function App() {

  const formStyle = {
    margin: '10px',
  }

  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'CEP',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Número',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    }
  ]

  const forms = formFields.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: ''
    }
  }, {})

  const [resposta, setResposta] = React.useState('')
  const [form, setForm] = React.useState(forms)

  function handleChange({target}) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then(response => {
      if(response.status === 200) {
        setResposta('Cadastrado com sucesso!')
      } else {
        setResposta('Erro ao cadastrar!')
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({id, label, type}) => (
          <div key={id} style={formStyle}>
            <label htmlFor={id}>{label}</label>
            <br />
            <input type={type} id={id} value={form[id]} onChange={handleChange}/>
          </div>
        ))}

        <button onClick={handleSubmit} style={formStyle}>Enviar</button>

        {resposta && <h2>{resposta}</h2>}
      </form>
    </>
  )
}

export default App
