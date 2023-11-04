import React from 'react'
import Img from '../img/contato.jpg'

const Contato = () => {
  return (
    <section style={{ display: 'flex'}}>
      <img src={Img} width="350px" />

      <div>
        <h3>Entre em contato.</h3>
        <ul>
          <li>contato@email.com</li>
          <li>12345-678</li>
          <li>Rua tal, 999</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
