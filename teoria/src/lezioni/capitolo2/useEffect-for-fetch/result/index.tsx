import { useEffect, useState } from "react"
import { PEOPLE_URL, Person } from "../constant/api"

type Props = {
  id: string
}

export const FetchPeople = ({ id }: Props) => {
  const [people, setPeople] = useState<Person>()
  //   const [loading, setLoading] = useState(false)
  const [fetchedId, setFetchedId] = useState<string | null>(null)
  const [numFetch, setNumFetch] = useState(0)

  useEffect(() => {
    const abortController = new AbortController()
    // let active = true
    const fetchPeople = async () => {
      setNumFetch((prev) => prev + 1)
      setTimeout(
        async () => {
          try {
            const res = await fetch(`${PEOPLE_URL}/${id}`, {
              signal: abortController.signal,
            })
            const data = (await res.json()) as Person
            setFetchedId(id)
            setPeople(data)
          } catch (error) {
            if (error instanceof DOMException && error.name === `AbortError`) {
              console.log(`Fetch aborted`)
            } else {
              console.log(error)
            }
          } finally {
            setNumFetch((prev) => prev - 1)
          }
        },
        Math.round(Math.random() * 12000)
      )
    }
    fetchPeople()
    return () => {
      console.log(`Cleanup`)
      abortController.abort()
    }
  }, [id])

  if (!people) return <div>Loading...</div>
  return (
    <div className="flex flex-col gap-4">
      <p className={id === fetchedId ? `text-green-500` : `text-red-500`}>
        Dati per {id}
      </p>
      <p>{people?.name}</p>
      <p>Remaining fetch: {numFetch}</p>
    </div>
  )
}

export const UseEffectForFetchResult = () => {
  const [id, setId] = useState(`1`)
  return (
    <div className="flex flex-col gap-4">
      <select
        onChange={(e) => setId(e.target.value)}
        className="select"
        value={id}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <FetchPeople id={id} />
    </div>
  )
}
