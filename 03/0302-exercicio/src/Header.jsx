import React from 'react'
import Produto from './Produto'

const Header = () => {

  const [dados, setDados] = React.useState(null)

  const btnStyle = {
    boxSizing: 'border-box',
    border: '1px solid',
    padding: '10px 20px',
    background: 'white',
    margin: '10px',
  }


  function handleClick(url) {
    // const { pathname } = window.location
    // localStorage.setItem('path', pathname)
    // console.log(pathname, localStorage)

    // fetch(`https://ranekapi.origamid.dev/json/api/produto${url}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDados(data)
    //   })
  }


  // React.useEffect(() => {
  //   function handleClick(url) {
  //     // const { pathname } = window.location
  //     // localStorage.setItem('path', pathname)
  //     // console.log(pathname, localStorage)

  //     fetch(`https://ranekapi.origamid.dev/json/api/produto${url}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setDados(data)
  //       })
  //   }
  // }, [])

  return (
    <header>
      <div>
        <h1>Preferencia: </h1>
        <a href="/notebook" onClick={handleClick('/notebook')} style={btnStyle}>notebook</a>
        <a href="/smartphone" onClick={handleClick('/smartphone')} style={btnStyle}>smartphone</a>
      </div>

      {dados && <Produto dados={dados} />}

    </header>
  )
}

export default Header
