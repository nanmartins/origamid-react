// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

// const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

import React from 'react'

function App() {

  const [cores, setCores] = React.useState([])

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

  function handleChange({target}) {
    if(target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor)
  }

  return (
    <>
      <form>
        {coresArray.map((cor) => (
          <div key={cor}>
            <label style={{textTransform: 'capitalize'}}>
              <input type="checkbox" value={cor} checked={handleChecked(cor)} onChange={handleChange}/>
              {cor}
            </label>
          </div>
        ))}
      </form>
    </>
  )
}

export default App
