import React from 'react'
import Titulo from './Titulo'

const Produtos = () => {

  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ]

  return (
    <>
      <Titulo texto="Produtos" />
      <ul style={{listStyle: 'none', padding: '0'}}>
        {produtos.map((produto) => (
          <li key={produto.nome} style={{border: '1px solid black', padding: '0 30px 20px 30px', marginBottom: '20px'}}>
            <h3>{produto.nome}</h3>
            <ul>
              {produto.propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
            </ul>

          </li>
        ))}
      </ul>
    </>
  )
}

export default Produtos
