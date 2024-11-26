import { memo, useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { initialTodos } from "../utils"
import { Button } from "@/components/ui/button"

export const UseMemoResult = () => {
  const [filter, setFilter] = useState<"completed" | "inProgress">(`completed`)
  const [darkMode, setDarkMode] = useState(false)

  const filteredTodos = useMemo(() => {
    console.time(`filteredTodos`)
    const result = initialTodos.filter((todo) => todo[filter])
    console.timeEnd(`filteredTodos`)
    return result
  }, [filter])

  //   const filteredUnmemoized = todos.filter((todo) => todo[filter])

  const changeTheme = () => {
    setDarkMode((prev) => !prev)
  }

  // Puoi memoizzare le funzioni perché sono oggetti e quindi mutabili
  const printFilteredTodos = useMemo(
    () => (items: Todo[]) => {
      console.log(`filteredTodos`, items)
    },
    []
  )

  // memoized JSX results perché è immutabile
  const content = useMemo(
    () => (
      <List todos={filteredTodos} printFilteredTodos={printFilteredTodos} />
    ),
    [filteredTodos, printFilteredTodos]
  )

  return (
    <div className={cn(`flex flex-col gap-4`, darkMode && `bg-violet-900`)}>
      <input type="checkbox" checked={darkMode} onChange={changeTheme} />
      <h1>Completed todos</h1>
      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value as "completed" | "inProgress")
        }
      >
        <option value="completed">Completed</option>
        <option value="inProgress">In Progress</option>
      </select>
      {content}
    </div>
  )
}

type Todo = {
  id: number
  title: string
  completed: boolean
  inProgress: boolean
}

const List = memo(
  ({
    todos,
    printFilteredTodos,
  }: {
    todos: Todo[]
    printFilteredTodos: (items: Todo[]) => void
  }) => {
    console.log(`component rendered`)
    const [count, setCount] = useState(0)

    // prevent re-run effects
    const config = useMemo(
      () => ({
        options: `options`,
      }),
      []
    )

    const filterOptions = useMemo(
      () => ({
        filter: `inProgress` as const,
      }),
      []
    )

    const filteredMemoized = useMemo(() => {
      console.log(`filteredMemoized`)
      return todos.filter((todo) => todo[filterOptions.filter])
    }, [todos, filterOptions])

    useEffect(() => {
      console.log(`config changed`, config)
    }, [config])

    return (
      <div>
        <Button type="button" onClick={() => setCount((prev) => prev + 1)}>
          {count}
        </Button>
        <Button
          type="button"
          className="ml-4"
          onClick={() => printFilteredTodos(filteredMemoized)}
        >
          Print filtered todos
        </Button>
        <ul className="mt-4">
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    )
  }
)
