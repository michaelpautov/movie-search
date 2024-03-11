import { type MovieShortInfo, type ResponseData } from '../types'
import { customFetch } from '../custom-fetch'

export const getMovies = async (queryString?: string): Promise<ResponseData<MovieShortInfo> | Error> =>
  await customFetch<ResponseData<MovieShortInfo>>(`?q=${queryString}`)
