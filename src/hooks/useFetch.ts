import { useEffect, useState } from 'react'

export default function useFetch<T>(url: string): T[] {
  const [data, setData] = useState<T[]>([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json: T[]) => {
        setData(json)
      })
  }, [url])

  return data
}
