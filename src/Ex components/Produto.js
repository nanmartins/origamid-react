import React from 'react'

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{border: '1px solid', padding: "20px", margin: "10px 0"}}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
