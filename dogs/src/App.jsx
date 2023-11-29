import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import { UserStorage } from './contexts/UserContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>

            <Route path="/" element={ <Home /> } />
            <Route path="/login/*" element={ <Login /> } />

          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>

    </>
  )
}

export default App
