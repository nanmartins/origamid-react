import React from 'react'

const Modal = ({ modal, setModal}) => {

  if(modal === true)
    return (
      <>
        <div>Esse e um modal.</div>
        <img src='https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="img" />
        <button onClick={() => setModal(false)}>Fechar</button>
      </>
    )
  return null
}

export default Modal
