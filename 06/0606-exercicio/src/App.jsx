import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Contato from './pages/Contato'

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook


function App() {

  return (
    <>
      <BrowserRouter>

        <section style={{ display: 'grid', placeItems: 'center' }}>

          <div style={{ width: '900px' }}>
            <Header />

            <Routes>
              <Route path='' element={<Home />}></Route>
              <Route path='contato' element={<Contato />}></Route>
            </Routes>
          </div>

        </section>

      </BrowserRouter>
    </>
  )
}

export default App
