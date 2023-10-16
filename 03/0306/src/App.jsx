import React from 'react'
import useFetch from "./useFetch"
import useLocalStorage from "./useLocalStorage"
function App() {

  const [produto, setProduto] = useLocalStorage('produto', '')
  const { request, data, loading, error } = useFetch()

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request(`https://ranekapi.origamid.dev/json/api/produto/`)
    }
    fetchData()
  }, [request])

  if(error) return <p>{error}</p>
  if(loading) return <h1>Loading...</h1>
  if(data) {
    return (
      <>
        <h1>Custom hook class</h1>
        <h2>Produto: {produto}</h2>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
          </div>
        ))}
      </>
    )
  }
  else return null
}

export default App
