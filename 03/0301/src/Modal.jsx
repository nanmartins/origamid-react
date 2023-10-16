import React from 'react'

const Modal = ({setModal, style}) => {
  return (
    <div>
      <p>Esse eh o modal</p>
      <button style={style} onClick={() => setModal(false)}>Fechar</button>
    </div>
  )
}

export default Modal
