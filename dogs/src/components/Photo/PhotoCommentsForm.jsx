import React from 'react'
import Enviar from '../../assets/enviar.svg?react'
import UseFetch from '../../Hooks/UseFetch'
import Error from '../Helpers/Error'
import styles from './PhotoCommentsForm.module.css'
import { COMMENT_POST } from '../../data/Data'

const PhotoCommentsForm = ({ id, setComments, single }) => {

  const [comment, setComment] = React.useState('')
  const { request, error } = UseFetch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} = await request(url, options)
    if(response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
      <textarea
        value={comment}
        id="comment"
        name="comment"
        placeholder='Comente...'
        className={styles.textarea}
        onChange={({target}) => setComment(target.value)}

      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm
