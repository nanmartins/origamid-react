import React from 'react'
import styles from './FeedModal.module.css'
import UseFetch from '../../Hooks/UseFetch'
import { PHOTO_GET } from '../../data/Data'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'
import PhotoContent from '../Photo/PhotoContent'


const FeedModal = ({photo, setModalPhoto}) => {

  const {data, error, loading, request} = UseFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  const handleClickOutside = (event) => {
    if(event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleClickOutside}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
