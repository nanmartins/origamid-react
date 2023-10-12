// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
import React from 'react';
import Produtos from './Produtos';
import Home from './Home';
import Nav from './Nav';


export default function App({ pathname }) {

  let Componente
  if (pathname === '/produtos') {
    Componente = Produtos
  } else {
    Componente = Home
  }


  return (
    <>
      <section>
        <Nav />
        <div>
          {/* {Componente && <Componente />} */}
          <Componente />
        </div>
      </section>
    </>
  )
}
