import React from 'react'
import Radio from './Form/Radio'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {

  const [respostas, setRespostas] = React.useState([{
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  }])
  const [slide, setSlide] = React.useState(0)
  const [resultado, setResultado] = React.useState(null)

  const handleChange = (({target}) => {
    setRespostas({ ...respostas, [target.id]: target.value})
  })

  const resultadoFinal = () => {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    )
    setResultado(`Voce acertou ${corretas.length} de ${perguntas.length}`)
  }

  const handleClick = () => {
    if(slide < perguntas.length - 1) {
      setSlide(slide + 1)
    } else {
      setSlide(slide +1)
      resultadoFinal()
    }
  }

  return (
    <>
      <form
        style={{ margin: '30px 20px' }}
        onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            value={respostas[pergunta.id]}
            active={slide === index}
            key={pergunta.id}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {resultado ? (
          <div>
            <p>{resultado}</p>
          </div>
      ) : (
        <button
          onClick={handleClick}
          style={{
            border: '1px solid',
            padding: '10px 25px',
            fontSize: '18px',
            backgroundColor: '#11faaa',
            cursor: 'pointer',
          }}
        >

            Próxima</button>
      )}
      </form>
    </>
  )
}

export default App
