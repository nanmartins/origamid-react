import React from 'react'
import Home from './Home';
import Produtos from './Produtos';
import Header from './Header';


const Ex3comp = () => {

  const { pathname } = window.location;
  let Url = Home;

    if(pathname === '/produtos') {
      Url = Produtos
    } else {
      Url = Home
    }

  return (
    <React.Fragment>
      <Header />
      <Url />
    </React.Fragment>
  )
}

export default Ex3comp
