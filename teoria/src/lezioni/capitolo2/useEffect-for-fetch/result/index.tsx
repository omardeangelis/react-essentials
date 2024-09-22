import { useEffect, useState } from "react"
import { PEOPLE_URL, Person } from "../constant/api"
import { cn } from "@/lib/utils"

type Props = {
  id: string
}

export const FetchPeople = ({ id }: Props) => {
  const [people, setPeople] = useState<Person>()
  const [fetchedId, setFetchedId] = useState(id)
  // const [numOfFetch, setNumOfFetch] = useState(0)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState<Error | null>(null)
  // useEffect(() => {
  //   setLoading(true)
  //   setError(null)
  //   fetch(`${PEOPLE_URL}/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPeople(data))
  //     .catch((err) => setError(err))
  //     .finally(() => setLoading(false))
  // }, [id])

  // useEffect(() => {
  //   const fetchPeople = async () => {
  //     setLoading(true)
  //     setError(null)
  //     try {
  //       const res = await fetch(`${PEOPLE_URL}/${id}`)
  //       const data = await res.json()
  //       setPeople(data)
  //     } catch (err) {
  //       setError(err as Error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchPeople()
  // }, [id])

  // useEffect(() => {
  //   const fetchPeople = async () => {
  //     setTimeout(
  //       async () => {
  //         try {
  //           const res = await fetch(`${PEOPLE_URL}/${id}`)
  //           const data = await res.json()
  //           setFetchedId(id)
  //           setPeople(data)
  //         } catch (err) {
  //           console.error(err)
  //         }
  //       },
  //       Math.round(Math.random() * 12000)
  //     )
  //   }
  //   fetchPeople()
  // }, [id])

  // useEffect(() => {
  //   let active = true
  //   const fetchPeople = async () => {
  //     setNumOfFetch((prev) => prev + 1)
  //     setTimeout(
  //       async () => {
  //         try {
  //           const res = await fetch(`${PEOPLE_URL}/${id}`)
  //           const data = await res.json()
  //           if (active) {
  //             setFetchedId(id)
  //             setPeople(data)
  //           }
  //         } catch (err) {
  //           console.error(err)
  //         } finally {
  //           setNumOfFetch((prev) => prev - 1)
  //         }
  //       },
  //       Math.round(Math.random() * 12000)
  //     )
  //   }
  //   fetchPeople()
  //   return () => {
  //     console.log(`unmounting`)
  //     active = false
  //   }
  // }, [id])

  useEffect(() => {
    const abortionController = new AbortController()
    const fetchPeople = async () => {
      setTimeout(
        async () => {
          try {
            const res = await fetch(`${PEOPLE_URL}/${id}`, {
              signal: abortionController.signal,
            })
            const data = await res.json()
            if (!abortionController.signal.aborted) {
              setFetchedId(id)
              setPeople(data)
            }
          } catch (err) {
            if (err instanceof DOMException && err.name === `AbortError`) {
              console.log(`fetch aborted`)
            } else {
              console.error(err)
            }
          }
        },
        Math.round(Math.random() * 12000)
      )
    }
    fetchPeople()
    return () => {
      console.log(`unmounting`)
      abortionController.abort()
    }
  }, [id])

  return (
    <div className="flex flex-col gap-4">
      <p>
        Fetching data for {id} from {PEOPLE_URL}
      </p>
      <p
        className={cn(
          fetchedId === id ? `text-green-500` : `text-red-500`,
          `text-sm`
        )}
      >
        Fetched data for {fetchedId}
      </p>

      {/* <p>Number of fetch: {numOfFetch}</p> */}
      {people && (
        <div>
          <p>People: {people.name}</p>
          <p>Height: {people.height}</p>
          <p>Mass: {people.mass}</p>
        </div>
      )}
    </div>
  )
}

export const UseEffectForFetchStart = () => {
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
