import React from 'react'
import Img from '../img/contato.jpg'

const Contato = () => {
  return (
    <section style={{ display: 'flex'}}>
      <img src={Img} width="350px" style={{borderRadius: '8px'}} />

      <div style={{padding: '10px 30px'}}>
        <h2>Entre em contato.</h2>
        <ul style={{listStyle: 'none'}}>
          <li>contato@email.com</li>
          <li>12345-678</li>
          <li>Rua tal, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
