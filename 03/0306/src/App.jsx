import React from 'react'
import useFetch from "./useFetch"
import useLocalStorage from "./useLocalStorage"
function App() {

  const [produto, setProduto] = useLocalStorage('produto', '')
  const { request, data } = useFetch()

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
  }, [produto])


  return (
    <>
      <h1>App</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  )
}

export default App
