import Header from "./components/Header"
import Produtos from "./components/Produtos"
import Home from "./components/Home"

function App() {

  const { pathname } = window.location
  let Componente
  if(pathname === '/produtos') {
    Componente = Produtos
  } else {
    Componente = Home
  }

  return (

    <>
      <section>
        <Header />
        <Componente />
      </section>
    </>
  )
}

export default App
