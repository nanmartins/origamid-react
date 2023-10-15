import React from 'react'
import { GlobalContext } from './GlobalContext'

const Carrinho = () => {

  // global context desestruturado
  const {cart, limparCart} = React.useContext(GlobalContext)

  return (
    <div>
      <h1>Carrinho: {cart.length}</h1>
      {cart.map((produto, index) => (
        <li key={index}>{produto.nome}</li>
      ))}

      <button onClick={() => limparCart()}>Limpar Cart</button>
    </div>
  )
}

export default Carrinho
