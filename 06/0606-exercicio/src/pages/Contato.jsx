import React from 'react'
import Img from '../img/contato.jpg'
import Head from '../services/Head'

const Contato = () => {
  return (
    <section className='animaZoom' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyItems: 'start', width: '900px', margin: '50px 0'}}>
      <Head title='Contato' description='Entre em contato com a gente' />
      <img src={Img} width="350px" style={{borderRadius: '8px', border: '1px solid #d4d4d4'}} />

      <div style={{ padding: '10px 30px', border: '1px solid #d4d4d4', width: '-webkit-fill-available', borderRadius: '8px' }}>
        <h2 style={{fontSize: '26px'}}>Entre em contato.</h2>
        <div style={{listStyle: 'none'}} className='contato-ul'>
          <li>contato@email.com</li>
          <li>12345-678</li>
          <li>Rua tal, 999</li>
        </div>
      </div>
    </section>
  )
}

export default Contato
