import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Login from './views/Login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={ <Home /> } />
          <Route path="/login/*" element={ <Login /> } />

        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
