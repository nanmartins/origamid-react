import React from 'react'

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', padding: '0 30px 10px 30px	', margin: '10px'}}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((propriedade) => {
          return <li key={propriedade}>{propriedade}</li>
        })}
      </ul>
    </div>
  )
}

export default Produto
