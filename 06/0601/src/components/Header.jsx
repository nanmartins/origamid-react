import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const activestyle = {
    color: 'tomato',
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', backgroundColor: '#eee'}}>
      <h1>Header</h1>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
        <NavLink to='/' end activeStyle={activestyle}>Home</NavLink>
        <NavLink to='/sobre' activeStyle={activestyle}>Sobre</NavLink>
        <NavLink to='/login' activeStyle={activestyle}>Login</NavLink>
      </div>

    </nav>
  )
}

export default Header
