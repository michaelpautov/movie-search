import { useEffect, useState } from 'react'
import { getMovie, type MovieFullInfo } from 'core'

export function useGetMovie (movieId?: string) {
  const [data, setData] = useState<MovieFullInfo>()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const movie = await getMovie(movieId)
        setIsPending(false)
        setData(movie as MovieFullInfo)
        setError(null)
      } catch (error) {
        setIsPending(false)
      }
    }
    void fetchData()
  }, [movieId])
  return { data, isPending, error }
}
