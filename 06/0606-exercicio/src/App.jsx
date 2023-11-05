import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Contato from './pages/Contato'
import Produto from './components/Produto/Produto'

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook


function App() {

  return (
    <>
      <BrowserRouter>

        <section className='main-container'>

          <div style={{ width: '100%', maxWidth: '900px' }}>
            <Header />
            <Routes>
              <Route path='' element={<Home />}></Route>
              <Route path='contato' element={<Contato />}></Route>
              <Route path='produto/:id/*' element={<Produto />}></Route>
            </Routes>
          </div>

        </section>

      </BrowserRouter>
    </>
  )
}

export default App
