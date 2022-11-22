import React from 'react'

const Produto = ({ dados }) => {

  return (
    <div>
      <h1>{dados.nome}</h1>
      <h4>R$ {dados.preco}</h4>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
    </div>
  )
}

export default Produto
