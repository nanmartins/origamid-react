import React from 'react'

const Produto = ({dados}) => {
  return (
    <div>
      <h2>{dados.nome}</h2>
      <p>Preço: R${dados.preco}</p>
    </div>
  )
}

export default Produto
