import { useEffect, useState } from 'react'
import { getMovies, type MovieShortInfo, type ResponseData } from 'core'

export function useGetMovies (queryString?: string) {
  const [data, setData] = useState<MovieShortInfo[]>()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const movies = await getMovies(queryString)
        setIsPending(false)
        setData((movies as ResponseData<MovieShortInfo>).description as MovieShortInfo[])
        setError(null)
      } catch (error) {
        setIsPending(false)
      }
    }
    void fetchData()
  }, [queryString])
  return { data, isPending, error }
}
