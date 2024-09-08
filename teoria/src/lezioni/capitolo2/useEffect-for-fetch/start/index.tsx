import { useEffect, useState } from "react"
import { PEOPLE_URL } from "../constant/api"

type Props = {
  id: string
}

export const FetchPeople = ({ id }: Props) => {
  useEffect(() => {
    console.log(`Fetching data for ${id} from ${PEOPLE_URL}`)
  }, [id])

  return (
    <div className="flex flex-col gap-4">
      <p>
        Fetching data for {id} from {PEOPLE_URL}
      </p>
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
