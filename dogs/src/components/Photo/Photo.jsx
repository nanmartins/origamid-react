import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../../Hooks/UseFetch'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'
import PhotoContent from './PhotoContent'
import { PHOTO_GET } from '../../data/Data'
import Head from '../../components/Helpers/Head'


const Photo = () => {

  const { id } = useParams()
  const { data, loading, error, request } = UseFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(id)
    request(url, options)
  },[request, id])

  if(error) <Error error={error} />
  if(loading) <Loading />
  if(data) {
    return (
      <section className='container mainContainer'>
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    )
  }
  else return null
}

export default Photo
