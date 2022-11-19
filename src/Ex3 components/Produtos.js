import React from 'react'
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {

  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <React.Fragment>
    <Titulo texto="Produtos" />
        {/* {produtos.map((produto) => (
          <div key={produto.nome} style={{border: '1px solid', padding: "20px", margin: "10px 0"}}>
            <h3>
              {produto.nome}
            </h3>
            <ul>
              {produto.propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
          </ul>
          </div>
        ))} */}

        {/* outra forma utilizando um componente para cada produto */}
        {produtos.map((produto) => (
          <Produto key={produto.nome} {...produto}/>
        ))}
    </React.Fragment>
  )
}

export default Produtos
