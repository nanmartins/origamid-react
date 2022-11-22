import React from 'react'
import Home from './Home';
// import Produtos from './Produtos';
import Header from './Header';
import App from '../Ex useState/App';


const Ex3comp = () => {

  const { pathname } = window.location;
  let Url = Home;

    if(pathname === '/produtos') {
      Url = App
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
