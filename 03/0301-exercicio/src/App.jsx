// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import React from 'react'
import Produto from './Produto'

function App() {

  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const fetchData = (event) => {
    setLoading(true)
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
      .then((response) => response.json())
      .then((data) => {
        setDados(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API', error)
        setLoading(false)
      })
  }
  return (
    <>
      <button style={{margin: '10px', padding: '10px 20px', background: 'white'}} onClick={fetchData}>Tablet</button>
      <button style={{margin: '10px', padding: '10px 20px', background: 'white'}}  onClick={fetchData}>Smartphone</button>
      <button style={{margin: '10px', padding: '10px 20px', background: 'white'}}  onClick={fetchData}>Notebook</button>

      {loading && <p>Carregando...</p>}

      {!loading && dados && <Produto dados={dados} />}
    </>
  )
}

export default App
