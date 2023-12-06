import React from 'react'
import styles from './FeedPhotosItem.module.css'
import Image from '../Helpers/Image'

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  const handleClick = () => {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image alt={photo.title} src={photo.src} />
      {/* <img src={photo.src} alt={photo.title} /> */}
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
