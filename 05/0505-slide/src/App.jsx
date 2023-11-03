import React from "react"
import Slide from "./components/slide/Slide"
function App() {

  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1'
    },
    {
      id: 'slide2',
      text: 'Slide 2'
    },
    {
      id: 'slide3',
      text: 'Slide 3'
    },
  ]

  return (
    <>
      <h1>App</h1>

      <Slide slides={slides} />
    </>
  )
}

export default App
