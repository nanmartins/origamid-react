import React from 'react'
import Titulo from './Titulo'
import App from '../Ex hooks & props/App'

const Home = () => {
  return (
    <React.Fragment>
      <Titulo texto="Home" />
      <p>Essa e a home do site</p>
      <App />
    </React.Fragment>
  )
}

export default Home
