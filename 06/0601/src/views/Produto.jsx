import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {

  const params = useParams()
  const location = useLocation()
  const search = new URLSearchParams(location.search)

  return (
    <>
      <h1>Produto: {params.id}</h1>
    </>
  )
}

export default Produto
