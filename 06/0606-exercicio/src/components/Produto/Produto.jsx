import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import Head from '../../services/Head'

const produtoFoto = {
  width: 'auto',
  maxWidth: '400px',
  borderRadius: '8px',
  display: 'flex',
  border: '1px solid #d4d4d4',
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

  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const { id } = useParams()

  React.useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setDados(data)
      }
      catch (erro) {
        setError('Nao foi possivel carregar dados.')
      }
      finally {
        setLoading(false)
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if(error) return <p>{error}</p>
  if(loading) return <Loading />
  if(dados === null) return null
  return (
    <>
      <Head title={dados.nome} description={dados.descricao} />

      <section className='animaZoom' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', margin: '50px 0'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {dados.fotos.map(foto => (
            <img key={foto.src} style={produtoFoto} src={foto.src } alt="" />
          ))}
        </div>

        <div style={{ display: 'block', padding: '10px 30px', border: '1px solid #d4d4d4', width: 'fit-content', borderRadius: '8px'  }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '900', color: 'rgb(59, 59, 59)' }}>{dados.nome}</h1>
          <p style={precoStyle}>R$ {dados.preco}</p>
          <p style={{ fontSize: '20px' }}>{dados.descricao}</p>
        </div>
      </section>
    </>
  )
}

export default Produto
