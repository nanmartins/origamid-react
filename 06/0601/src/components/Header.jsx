import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation()

  React.useEffect(() => {
    console.log('Mudou de rota para', location.pathname)
  }, [location])

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', backgroundColor: '#eee'}}>
      <h1>Logo*</h1>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center'}} id='nav'>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/sobre'>Sobre</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>

    </nav>
  )
}

export default Header
