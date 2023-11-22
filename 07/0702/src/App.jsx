import React from 'react'
// import Contato from './components/Contato'
const Contato = React.lazy(() => import('./components/Contato'))

function App() {

  const [ativo, setAtivo] = React.useState(false)

  return (
    <>
      <h1>App home page</h1>
      <hr />

      {ativo && (
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Contato />
        </React.Suspense>
      )}

      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </>
  )
}

export default App
