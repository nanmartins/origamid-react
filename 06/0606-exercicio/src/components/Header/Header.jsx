import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '30px 0'}}>
      <NavLink to='/'>Produtos</NavLink>
      <NavLink to='/contato'>Contato</NavLink>
    </nav>
  )
}

export default Header
