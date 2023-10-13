import React from 'react'

const Produto = ({dados}) => {
  return (
    <>
      <div>
        <h1>{dados.nome}</h1>
        <h4>Preço: R$ {dados.preco}</h4>
        <img src={dados.fotos[0].src} alt="" />
      </div>
    </>
  )
}

export default Produto
