import { memo, useState } from "react"
import { cn } from "@/lib/utils"
import { initialTodos } from "../utils"
import { Button } from "@/components/ui/button"

export const UseMemoStart = () => {
  const [filter, setFilter] = useState<"completed" | "inProgress">(`completed`)
  const [darkMode, setDarkMode] = useState(false)

  const filteredTodos = initialTodos.filter((todo) => todo[filter])

  const changeTheme = () => {
    setDarkMode((prev) => !prev)
  }

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
      <List todos={filteredTodos} />
    </div>
  )
}

type Todo = {
  id: number
  title: string
  completed: boolean
  inProgress: boolean
}

const List = memo(({ todos }: { todos: Todo[] }) => {
  console.log(`component rendered`)
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button type="button" onClick={() => setCount((prev) => prev + 1)}>
        {count}
      </Button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
})
