import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <p>Essa é a home do site</p>
      <NavLink to={'produto/notebook'}>Notebook</NavLink>
      <NavLink to={'produto/smartphone'}>Smartphone</NavLink>
    </div>
  )
}

export default Home
