import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Sobre from './views/Sobre'
import Header from './components/header/Header'
import Login from './views/Login'
import Pagina404 from './views/Pagina404'
import Produto from './components/produto/Produto'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <div style={{ padding: '0 20px'}}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='sobre' element={<Sobre />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='produto/:id/*' element={<Produto />}></Route>
          <Route path='*' element={<Pagina404 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
