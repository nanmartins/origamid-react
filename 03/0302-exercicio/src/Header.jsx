import React from 'react'
import Produto from './Produto'

const Header = () => {

  const [dados, setDados] = React.useState(null)
  const [url, setUrl] = React.useState('')

  const btnStyle = {
    boxSizing: 'border-box',
    border: '1px solid',
    padding: '10px 20px',
    background: 'white',
    margin: '10px',
  }


  React.useEffect(() => {
    if (localStorage.getItem('produto')) {
      setUrl(localStorage.getItem('produto'))
    }
  }, [])

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`)
    .then((response) => response.json())
    .then((data) => {
      setDados(data)
      localStorage.setItem('produto', url)
    })
  }, [url])

  return (
    <header>
      <div>
        <h1>Preferencia: {dados && dados.nome}</h1>
        <button onClick={() => setUrl('notebook')} style={btnStyle}>Notebook</button>
        <button onClick={() => setUrl('smartphone')} style={btnStyle}>Smartphone</button>
      </div>

      {dados && <Produto dados={dados} />}

    </header>
  )
}

export default Header
