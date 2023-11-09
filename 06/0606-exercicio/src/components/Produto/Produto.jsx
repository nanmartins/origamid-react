import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import Head from '../../services/Head'

const produtoFoto = {
  width: 'auto',
  maxWidth: '400px',
  borderRadius: '8px',
  display: 'block',
}

const precoStyle = {
  fontSize: '20px',
  backgroundColor: '#87F954',
  padding: '10px',
  margin: '0',
  borderRadius: '4px',
  display: 'inline-block',
}
const Produto = () => {

  const [dados, setDados] = React.useState([])

  const params = useParams()

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then(resp => resp.json())
      .then(data => {
        setDados(data)
      }, [params.id])
  })


    // React.useEffect(() => {
    //   async function fetchData() {
    //     const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    //     const data = await response.json()
    //     setDados(data)
    //   }
    //   fetchData()
    // }, [])

  const fotoSrc = dados.fotos ? dados.fotos[0].src : ''

  return (
    <>
      <Head title={dados.nome} description={dados.descricao} />
      <section className='animaZoom' style={{ display: 'flex', margin: '50px 0'}}>
        <img src={fotoSrc} width={400} style={produtoFoto} />
        <div style={{ display: 'block', padding: '10px 30px', width: '100%', maxWidth: '350px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '900', color: 'rgb(59, 59, 59)' }}>{dados.nome}</h1>
          <p style={precoStyle}>R$ {dados.preco}</p>
          <p style={{ fontSize: '20px' }}>{dados.descricao}</p>
        </div>
      </section>
    </>
  )
}

export default Produto
