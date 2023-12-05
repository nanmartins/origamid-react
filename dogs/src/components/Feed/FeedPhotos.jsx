import React from 'react'
import styles from './FeedPhotos.module.css'
import FeedPhotosItem from './FeedPhotosItem'
import UseFetch from '../../Hooks/UseFetch'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'
import { PHOTOS_GET } from '../../data/Data'

const FeedPhotos = () => {

  const {data, loading, error, request } = UseFetch()

  React.useEffect(() => {
    async function fetchPhotos() {
      const {url, options} = PHOTOS_GET({page: 1, total: 20, user: 0})
      const {response, json} = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data) {
    return (
      <ul className={`${styles.feed} animeLeft` }>
        {data.map(photo => {
          return <FeedPhotosItem key={photo.id} photo={photo} />
        })}
      </ul>
    )
  }
  else return null
}

export default FeedPhotos
