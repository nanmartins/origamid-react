import React from 'react'
import { NavLink } from 'react-router-dom'
import Head from '../services/Head'

const Produtos = () => {

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
      <Head title='Produtos' description='Nossos produtos disponiveis' />


      <section className='animaZoom' style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '900px', justifyContent: 'space-between', margin: '0 auto' }}>

        <h1 style={{ width: '100%', fontSize: '30px', fontWeight: '600', textAlign: 'center', margin: '30px 0'}}>Produtos</h1>

        {dados.map(produto => (
          <div key={produto.id} style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '20px' }}>
            <NavLink to={`/produto/${produto.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={produto.fotos[0].src} width={275} style={{ borderRadius: '8px' }}/>
              <h3 style={{ marginTop: '5px', fontSize: '20px', fontWeight: '900', color: 'rgb(59, 59, 59)'}}>{produto.nome}</h3>
            </NavLink>
          </div>
        ))}
      </section>
    </>
  )
}

export default Produtos
