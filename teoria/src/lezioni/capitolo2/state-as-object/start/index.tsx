/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Button } from "@/components/ui/button"

type Point = {
  x: number
  y: number
}

type ExamplesName = "cursor" | "spread-copy" | "arrays"

const exampleArrays = [`cursor`, `spread-copy`, `arrays`] as const

const CursorAsDot = () => {
  const [position] = useState<Point>({
    x: 0,
    y: 0,
  })

  const handleWrongPointerMove = (e: React.PointerEvent) => {
    const itemPosition = {
      x: e.currentTarget.getBoundingClientRect().left,
      y: e.currentTarget.getBoundingClientRect().top,
    }
    position.x = e.clientX - itemPosition.x
    position.y = e.clientY - itemPosition.y
  }

  return (
    <div
      onPointerMove={handleWrongPointerMove}
      className="w-full h-[200px] bg-neutral-700 relative overflow-hidden cursor-none"
    >
      <div
        className="absolute rounded-full bg-green-400 w-4 h-4 left-0 top-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  )
}

const SpreadCopy = () => {
  const [form] = useState({
    name: ``,
    surname: ``,
  })

  const handleWrongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Non verrà aggiornato lo stato
    form.name = e.target.value

    // setForm({
    //   name: e.target.value,
    // })
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  return (
    <div className="flex flex-col p-4 bg-neutral-800 rounded-sm gap-4">
      <input
        className="p-2 bg-neutral-600 rounded-sm"
        name="name"
        value={form.name}
        onChange={handleWrongChange}
        placeholder="Name"
      />
      <input
        className="p-2 bg-neutral-600 rounded-sm"
        name="surname"
        value={form.surname}
        onChange={handleWrongChange}
        placeholder="Surname"
      />
      <Button onClick={() => alert(`Ciao ${form.name} ${form.surname}`)}>
        Evviva
      </Button>
    </div>
  )
}

const Arrays = () => {
  const [list] = useState<number[]>([])

  const handleWrongAdd = () => {
    // Non verrà aggiornato lo stato
    list.push(Math.random())
  }

  const handleWrongRemove = () => {
    // Non verrà aggiornato lo stato
    list.pop()
  }

  return (
    <div>
      <div className="flex gap-4">
        <Button variant="success" onClick={handleWrongAdd}>
          Add
        </Button>
        <Button variant="destructive" onClick={handleWrongRemove}>
          Remove
        </Button>
      </div>
      <ul>
        {list.map((item) => (
          <li className="mt-2" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Examples = ({ name }: { name: ExamplesName }) => {
  switch (name) {
    case `cursor`:
      return <CursorAsDot />
    case `spread-copy`:
      return <SpreadCopy />
    case `arrays`:
      return <Arrays />
    default:
      return null
  }
}

export const StateAsObject = () => {
  const [example, setExample] = useState<ExamplesName>(`cursor`)

  return (
    <div>
      <div>
        {exampleArrays.map((item) => (
          <Button
            key={item}
            onClick={() => setExample(item)}
            className="mr-2"
            size="sm"
            variant={example === item ? `success` : `secondary`}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="mt-4">
        <Examples name={example} />
      </div>
    </div>
  )
}

export const StateAsObjectInizio = () => (
  <div>
    <div>
      <h2 className="text-lg font-bold mb-2">Target our cursor</h2>
      <StateAsObject />
    </div>
  </div>
)
