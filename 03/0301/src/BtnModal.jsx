import React from 'react'

const BtnModal = ({setModal, style}) => {
  return (
    <div>
      <p>Abrir modal!!!</p>
      <button style={style} onClick={() => setModal(true)}>ABRIR</button>
    </div>
  )
}

export default BtnModal
