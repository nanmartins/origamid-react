import React from 'react'
import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../data/Data'
import UseFetch from '../../Hooks/UseFetch'

const PhotoDelete = ({ id }) => {

  const { loading, request } = UseFetch()

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if(confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if(response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>Deletando...</button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>Deletar</button>
      ) }
    </>
  )
}

export default PhotoDelete
