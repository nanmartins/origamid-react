import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import User from './components/User/User'
import Photo from './components/Photo/Photo'
import { UserStorage } from './contexts/UserContext'
import ProtectedRouter from './components/Helpers/ProtectedRouter'
import UserProfile from './components/User/UserProfile'
import NotFound from './components/Error404/NotFound'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <main className='AppBody'>
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
              <Route path="foto/:id" element={ <Photo /> } />
              <Route path="perfil/:user" element={ <UserProfile /> } />
              <Route path="*" element={ <NotFound /> } />
            </Routes>
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>

    </div>
  )
}

export default App
