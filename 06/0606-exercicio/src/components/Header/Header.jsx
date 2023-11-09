import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const navStyle = {
    display: 'flex',
    maxWidth: '900px',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 0',
    borderBottom: '1px solid #d4d4d4'
  }


  return (
    <nav style={navStyle}>
      <NavLink to='/' className={({ isActive }) => isActive ? 'logo-style-active' : 'logo-style'} >
        <p style={{ display: 'flex', fontSize: '36px', margin: '0', fontWeight: '900' }}>Ranek</p>
      </NavLink>

      <div style={{ display: 'flex', gap: '20px'}}>
        <NavLink to='/produtos'>Produtos</NavLink>
        <NavLink to='/contato'>Contato</NavLink>
      </div>
    </nav>
  )
}

export default Header
