import React from "react"
import Produtos from "./components/Produtos"

function App() {

  const [ativar, setAtivar] = React.useState(false)

  return (
    <>
      <h1>App</h1>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produtos />}
    </>
  )
}

export default App
