import React from 'react'
import Produto from './Produto'

const App = () => {

  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
      );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <div>
      <button style={{margin: '5px'}} onClick={handleClick}>notebook</button>
      <button style={{margin: '5px'}} onClick={handleClick}>smartphone</button>
      <button style={{margin: '5px'}} onClick={handleClick}>tablet</button>
      {/* caso dados existir, o que nao eh true ja que o state inicial de dados eh null, renderiza produto */}
      {loading ? <h4>Carregando...</h4> : null}
      {dados && !loading ? <Produto dados={dados} /> : null}
    </div>
  )
}

export default App
