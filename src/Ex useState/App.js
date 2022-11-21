import React from 'react'
import Items from './Items'

const App = () => {
  return (
    <div>
      <button style={{margin: "5px"}}>notebook</button>
      <button style={{margin: "5px"}}>smartphone</button>
      <button style={{margin: "5px"}}>tablet</button>
      <Items/>
    </div>
  )
}

export default App
