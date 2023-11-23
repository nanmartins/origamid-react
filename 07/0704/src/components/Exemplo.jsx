import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'remover':
      return state.filter(item => item !== action.content)
    case 'adicionar':
      return [...state, action.content]
    default:
      throw new Error()
  }
}
const Exemplo = () => {

  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva', 'Abacaxi'])
  console.log(state)

  return (
    <>
      {state}
      <div>
        <button onClick={() => dispatch( {type: 'remover', content: 'Banana' })}>Remover Banana</button>
        <button onClick={() => dispatch( {type: 'adicionar', content: 'Banana' })}>Adicionar Banana</button>
      </div>
    </>
  )
}

export default Exemplo
