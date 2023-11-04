import React from 'react'
import ProdutoDescricao from './ProdutoDescricao'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCostumizado from './ProdutoCostumizado'
import { BrowserRouter, Routes, Route, useLocation, useParams, NavLink } from 'react-router-dom'

const Produto = () => {

  const params = useParams()
  const key = '*'
  const color = params[key] === '' ? { color: 'rgb(25, 150, 25)' } : { color: 'black' }
  // const location = useLocation()
  // const search = new URLSearchParams(location.search)

  return (
    <>
      <h1>Produto: {params.id}</h1>

      <nav id='nav' style={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
        <NavLink to='' style={color}>Detalhes</NavLink>
        <NavLink to='avaliacao'>Avaliação</NavLink>
        <NavLink to='costumizado'>Costumizado</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<ProdutoDescricao />}></Route>
        <Route path='avaliacao' element={<ProdutoAvaliacao />}></Route>
        <Route path='costumizado' element={<ProdutoCostumizado />}></Route>
      </Routes>
    </>
  )
}

export default Produto
