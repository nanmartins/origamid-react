import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produtos = () => {

  const global = React.useContext(GlobalContext)

  if(global.dados.length === 0) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome} <button onClick={() => global.setCart([...global.cart, produto])}>Add Cart</button></li>
      ))}

      <br />
      <button onClick={() => global.limparDados()}>Limpar Dados</button>
    </div>
  )
}

export default Produtos
