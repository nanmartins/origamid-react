import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Sobre from './views/Sobre'
import Header from './components/Header'
import Login from './views/Login'
import Pagina404 from './views/Pagina404'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='sobre' element={<Sobre />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='*' element={<Pagina404 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
