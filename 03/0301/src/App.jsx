import React from "react"
import BtnModal from "./BtnModal"
import Modal from "./Modal"
function App() {
    // useState Hook ]]]]]]]]]]]]]]]]]]]]
  const [active, setActive] = React.useState(false)
  const [dados, setDados] = React.useState({ nome: 'Renan', idade: '33'})
  const [modal, setModal] = React.useState(false)
  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(['Item 1'])


  function handleClick() {
    setActive(!active)
    setDados({ ...dados, faculdade: 'Possui faculdade' })
  }

  function handleContar() {
    setContar(contar + 1)
    setItems((items) => [...items, 'Item ' + (contar + 1)])
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

      <section style={sectionStyle}>
        {modal ? <Modal setModal={setModal} style={buttonStyle} /> : null}
        {!modal ? <BtnModal setModal={setModal} style={buttonStyle} /> : null}
      </section>

      <hr style={{border: 'white'}}	/>

      <div style={{...sectionStyle, flexDirection: 'column'}}>
        <button style={{...buttonStyle, width: '100px', margin: '10px auto'}} onClick={handleContar}>{contar}</button>
        {items.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </div>
    </>
  )
}

export default App
