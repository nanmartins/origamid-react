import React from 'react'
import Exemplo from './components/Exemplo';

function App() {

  const reducer = (state, action) => {
    // if(action === 'aumentar') {
    //   return state + 1
    // }
    // if(action === 'diminuir') {
    //   return state - 1
    // }
    // return new Error('Ação desconhecida')
    switch (action) {
      case 'AUMENTAR':
        return state + 1;
      case 'DIMINUIR':
        return state - 1;
      default:
        throw new Error('Ação desconhecida')
    }
  }

  const [state, dispatch] = React.useReducer(reducer, 0)

  // const aumentar = () => {
  //   setContar(contar + 1)
  // }

  // const diminuir = () => {
  //   setContar(contar - 1)
  // }

  return (
    <>
      <h1>App home page</h1>
      <p>Contar: {state}</p>

      <div>
        {/* <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button> */}
        <button onClick={() => dispatch('AUMENTAR')}>+</button>
        <button onClick={() => dispatch('DIMINUIR')}>-</button>
      </div>

      <hr />
      <Exemplo />

    </>
  )
}

export default App
