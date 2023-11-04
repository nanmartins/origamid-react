import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
// import Head from '../services/Head'

const Home = () => {
  return (
    <div>
      {/* <Head title='Home' description='Essa é a home do site'/> */}
      <Helmet>
        <title>Logo* | Home</title>
        <meta name='description' content='Essa é a home do site'/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </Helmet>
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
