import React from "react"
import BtnModal from "./BtnModal"
import Modal from "./Modal"
function App() {
    // useState Hook ]]]]]]]]]]]]]]]]]]]]
  const [active, setActive] = React.useState(false)
  const [dados, setDados] = React.useState({ nome: 'Renan', idade: '33'})
  const [modal, setModal] = React.useState(false)

  function handleClick() {
    setActive(!active)
    setDados({ ...dados, faculdade: 'Possui faculdade' })
  }

  const sectionStyle = {
    display: 'flex',
    padding: '20px',
    border: '1px solid',
    justifyContent: 'center',
    textAlign: 'center',
  }

  const buttonStyle = {
    margin: '20px',
    padding: '10px 20px',
    border: '1px solid',
    backgroundColor: 'white',
  }

  return (
    <>
      <div>
        <button style={buttonStyle} onClick={handleClick}>{active ? 'Hello' : 'App'}</button>
        <h1>{!active ? 'Hello' : 'App'}</h1>
      </div>

      <hr />

      <div>
        <h1>{dados.nome}, <span>{dados.idade}</span></h1>
        <p>{dados.faculdade}</p>
      </div>

      <hr />

      <div style={sectionStyle}>
        {modal ? <Modal setModal={setModal} style={buttonStyle} /> : null}
        {!modal ? <BtnModal setModal={setModal} style={buttonStyle} /> : null}
      </div>

    </>
  )
}

export default App
