import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <p>Essa é a home do site</p>
      <nav className="home-nav" style={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
        <NavLink to={'produto/notebook'}>Notebook</NavLink>
        <NavLink to={'produto/smartphone'}>Smartphone</NavLink>
      </nav>
    </div>
  )
}

export default Home
