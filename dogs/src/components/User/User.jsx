import React from 'react'
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import { Route, Routes } from 'react-router-dom'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../contexts/UserContext'
import NotFound from '../Error404/NotFound'
import Head from '../../components/Helpers/Head'


const User = () => {

  const { data } = React.useContext(UserContext)

  return (
    <section className='container'>
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
