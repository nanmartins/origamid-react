import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState([])
  const [cart, setCart] = React.useState([])

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((data => {
        setDados(data)
      }))
  }, [])

  function limparCart() {
    setCart([])
  }

  function limparDados() {
    setDados([])
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados, cart, setCart, limparCart }}>
      {children}
    </GlobalContext.Provider>
  )
}
