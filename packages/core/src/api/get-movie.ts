import { type MovieFullInfo } from '../types'
import { customFetch } from '../custom-fetch'

export const getMovie = async (id?: string): Promise<MovieFullInfo | Error> =>
  await customFetch<MovieFullInfo>(`?tt=${id}`)
