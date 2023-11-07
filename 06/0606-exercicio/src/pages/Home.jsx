import React from 'react'
import { NavLink } from 'react-router-dom'
import Head from '../services/Head'

const Home = () => {

  const [dados, setDados] = React.useState([])

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(resp => resp.json())
      .then(data => {
        setDados(data)
      })
  }, [])

  return (
    <>
      <Head title='Home' description='Descrição da Home' />
      <section className='animaZoom' style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '900px', justifyContent: 'space-between', margin: '0 auto' }}>
        {dados.map(produto => (
          <div key={produto.id} style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '20px' }}>
            <NavLink to={`/produto/${produto.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={produto.fotos[0].src} width={275} style={{ borderRadius: '8px', maxWidth: '100%' }}/>
              <h2 style={{ marginTop: '5px', fontWeight: '900', color: 'rgb(59, 59, 59)'}}>{produto.nome}</h2>
            </NavLink>
          </div>
        ))}
      </section>
    </>
  )
}

export default Home
