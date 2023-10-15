import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produtos = () => {

  const liStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid',
    margin: '10px',
    padding: '0 10px'
  }

  const btnStyle = {
    padding: '10px 20px',
    background: 'white',
    margin: '10px'
  }

  const global = React.useContext(GlobalContext)

  if(global.dados.length === 0) {
    return <h1>Loading...</h1>
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ul style={{ padding: '0'}}>
        {global.dados.map((produto) => (
          <li style={liStyle} key={produto.id}>
            <h2>{produto.nome}</h2>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
              <h5 style={{ fontSize: '14px'}}>R${produto.preco}</h5>
              <button style={btnStyle} onClick={() => global.setCart([...global.cart, produto])}>Add Cart</button>
            </div>
          </li>
        ))}
      </ul>
      <hr style={{ margin: '0 10px'}}/>

      <br />
      <button style={btnStyle} onClick={() => global.limparDados()}>Limpar Dados</button>
    </div>
  )
}

export default Produtos
