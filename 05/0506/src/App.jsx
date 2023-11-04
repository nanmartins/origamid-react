import React from 'react'
import './App.css'
import foto from './img/foto.jpg'
// import dog from './img/dog.svg'
import { ReactComponent as Dog } from './img/dog.svg'
import DogSvg from './components/svg/DogSvg'

function App() {

  const [olho, setOlho] = React.useState(0)

  const handleClick = () => {
    // setOlho(olho + 2)
    for(let i = 0; i < 4; i++) {
      setTimeout(() => {
        setOlho(i)
      }, 30 * i);
    }
  }

  return (
    <>
      <h1>App</h1>
      <p className='fundo' onClick={handleClick}></p>
      {/* <img src={dog} alt="dog" /> */}
      <Dog />
      <DogSvg color='red' olho={olho}/>
      <br />
      <img src={foto} style={{width: '600px'}} alt="cachorro" />
    </>
  )
}

export default App
