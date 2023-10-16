import React from 'react'

function App() {

  const [comentarios, setComentarios] = React.useState(['Comentário 1', 'Comentário 2'])
  const [input, setInput] = React.useState('')
  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)

  const video = React.useRef()
  const inputRef = React.useRef()
  const timeoutRef = React.useRef()

  React.useEffect(() => {
    console.log(video.current)
  }, [])

  const handleClick = () => {
    setComentarios([...comentarios, input])
    setInput('')
    inputRef.current.focus
  }

  const adicionarCarrinho = () => {
    setCarrinho(carrinho + 1)
    setNotificacao('Produto adicionado ao carrinho')

    clearTimeout(timeoutRef.current)
    timeoutRef.current =setTimeout(() => {
      setNotificacao(null)
    }, 2000)
  }

  return (
    <>
      <div>
        <h1>App</h1>
        <video style={{border: '1px solid'}} 	ref={video}/>
      </div>

      <hr />

      <div>
        <ul>
          {comentarios.map((comentario) =>  (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputRef}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={({key}) => key === 'Enter' && handleClick()}
        />
        <br />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </div>

      <hr />

      <div>
        <button onClick={adicionarCarrinho}>Adicionar {carrinho}</button>
        <p>{notificacao}</p>
      </div>
    </>
  )
}

export default App
