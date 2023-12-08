import React from 'react'
// import { UserContext } from '../../contexts/UserContext'
import Feed from '../Feed/Feed'
import { useParams } from 'react-router-dom'


const UserProfile = () => {

  const { user } = useParams()

  return (
    <section className='container mainContainer'>
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  )
}

export default UserProfile
