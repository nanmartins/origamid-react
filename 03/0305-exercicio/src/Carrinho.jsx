import React from 'react'
import { GlobalContext } from './GlobalContext'

const Carrinho = () => {

  const liStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid',
    margin: '10px',
    padding: '0 10px'
  }

  // global context desestruturado
  const {cart, setCart, limparCart} = React.useContext(GlobalContext)

  return (
    <div>
      <h1>Carrinho: {cart.length}</h1>
      {cart.map((produto, index) => (
        <li key={index} style={liStyle}>
          <h4>{`${index + 1}  ${produto.nome}`}</h4>
          <h5>R${produto.preco}</h5>
          {/* <button >Remover</button> */}
        </li>
      ))}
      {/* {console.log(cart)} */}

      <button onClick={() => limparCart()}>Limpar Cart</button>
    </div>
  )
}

export default Carrinho
