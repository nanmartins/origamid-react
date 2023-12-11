import React from 'react'
import Head from '../../components/Helpers/Head'
import Error from '../../components/Helpers/Error'
import Loading from '../../components/Helpers/Loading'
import UseFetch from '../../Hooks/UseFetch'
import { STATS_GET } from '../../data/Data'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))


const UserStats = () => {

  const { data, error, loading, request } = UseFetch()

  React.useEffect(() => {
    const getData = async () => {
      const {url, options} = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if(error) <Error error={error} />
  if(loading) <Loading />
  if(data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  }
  else return null
}

export default UserStats
