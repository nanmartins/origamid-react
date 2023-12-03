import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import User from './components/User/User'
import { UserStorage } from './contexts/UserContext'
import ProtectedRouter from './components/Helpers/ProtectedRouter'

function App() {

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>

            <Route path="/" element={ <Home /> } />
            <Route path="login/*" element={ <Login /> } />
            <Route
              path="conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />

          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>

    </>
  )
}

export default App
