import React from 'react'

const Header = () => {

  function linkRed(event) {
    return <span style={{ color: "red" }}></span>
  }

  return (
    <React.Fragment>
      <ul>
        <li><a href='/'><span onMouseOver={linkRed}>Home</span></a></li>
        <li><a href='/produtos'><span onMouseOver={linkRed}>Produtos</span></a></li>
      </ul>
    </React.Fragment>
  )
}

export default Header
