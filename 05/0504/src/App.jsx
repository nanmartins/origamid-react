import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {

  return (
    <>
      <h1>React bootstrap card</h1>
      <Card bg="dark" text="white" className='m-5' style={{maxWidth: '18rem'}}>
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$2500</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>

      <h1>Bootstrap card</h1>
      <div className="card bg-dark text-white m-5" style={{maxWidth: '18rem'}}>
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <h5 className="card-title">R$2500</h5>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <Button variant="primary">Comprar</Button>
        </div>
      </div>
    </>
  )
}

export default App
