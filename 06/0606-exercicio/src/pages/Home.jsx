import React from 'react'
// import { NavLink } from 'react-router-dom'
import Head from '../services/Head'

const Home = () => {

  return (
    <>
      <Head title='Home' description='Descrição da Home' />

      <div style={ {margin: '50px 0' }}>
        <img style={{ width: '100%', borderRadius: '8px', border: '1px solid #d4d4d4' }} src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=2610&auto=format&
        fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <section>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', height: '20vh' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0' }}>Ranek</h2>
          <p style={{ fontSize: '20px', fontWeight: '600' }}>Descrição da Home</p>
        </div>

      </section>


    </>
  )
}

export default Home
