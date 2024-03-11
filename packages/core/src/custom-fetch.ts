import { API } from './constants'

export async function customFetch<T> (url?: string): Promise<T | Error> {
  try {
    const response = await fetch(`${API}${url}`)
    const data = await response.json()
    return data as T
  } catch (error) {
    return new Error(error as string)
  }
}
