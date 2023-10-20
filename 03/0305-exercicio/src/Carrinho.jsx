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

  const btnStyle = {
    padding: '10px 20px',
    background: 'white',
    margin: '10px'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  }
  // global context desestruturado
  const {cart, setCart, limparCart} = React.useContext(GlobalContext)
  const produtoId = ''

  return (
    <div>
      <h1>Carrinho: {cart.length}</h1>
      {cart.map((produto, index) => (
        <li key={index} style={liStyle}>
          <div style={divStyle}>
            <img src={produto.fotos[0].src} height="50px" width="50px" alt="" />
            <h4>{`${index + 1}  ${produto.nome}`}</h4>
          </div>

          <div style={divStyle}>
            <h5>R${produto.preco}</h5>
          </div>
        </li>
      ))}

      <button style={btnStyle} onClick={() => limparCart()}>Limpar Cart</button>
    </div>
  )
}

export default Carrinho
