/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, memo, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const FormComponent = memo(
  (props: { handleSubmit: (value: string) => void }) => {
    console.log(`Iscriviti al canale`)
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.target as HTMLFormElement)
      const value = formData.get(`name`) as string
      props.handleSubmit(value)
      event.currentTarget.reset()
    }
    return (
      <form onSubmit={onSubmit} className="flex gap-4 items-center">
        <Input name="name" type="text" />
        <Button type="submit">Submit</Button>
      </form>
    )
  }
)

// Quando conviene usare useCallback?

// 1. Quando vogliamo passare una funzione come prop
const StandardComponent = ({
  theme,
  productId,
}: {
  theme: string
  productId: string
}) => {
  const handleSubmit = (value: string) => {
    console.log(`submit ${value} ${productId}`)
  }
  return (
    <div className={`theme-${theme}`}>
      <p className="mb-4">{theme} StandardComponent</p>
      <FormComponent handleSubmit={handleSubmit} />
    </div>
  )
}

// 2. Quando aggiornare uno state in una funzione memoizzata
const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([])

  const addTodoWithDeps = (todo: string) => {
    setTodos([...todos, todo])
  }

  // 3. Quando uno useEffect dipende da una funzione
  const createConfig = () => ({
    todo: `todo`,
  })

  useEffect(() => {
    createConfig()
    console.log(`createConfig`)
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
      <div className="mt-4">
        <FormComponent handleSubmit={addTodoWithDeps} />
      </div>
    </div>
  )
}

// 4. Quando ritorniamo delle funzioni dai un custom hook
const useCreateConfig = () => {
  const createConfig = () => ({
    todo: `todo`,
  })

  return createConfig
}

const UseCreateConfigComponent = () => {
  const createConfig = useCreateConfig()
  useEffect(() => {
    createConfig()
    console.log(`Ti sei iscritto al canale?`)
  }, [createConfig])
  return <div>UseCreateConfigComponent</div>
}

export const UseCallbackStart = () => {
  const [theme, setTheme] = useState(`light`)
  const [productId, setProductId] = useState(`1`)
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={theme === `dark`}
            onCheckedChange={() =>
              setTheme(theme === `light` ? `dark` : `light`)
            }
          />
          <span>Dark theme</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Product ID</span>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <hr className="my-4" />
      <StandardComponent theme={theme} productId={productId} />
      {/* <hr className="my-4" /> */}
      {/* <OptimizedComponent theme={theme} productId={productId} /> */}
      {/* <hr className="my-4" /> */}
      {/* <TodoList /> */}
      {/* <hr className="my-4" /> */}
      {/* <UseCreateConfigComponent /> */}
    </div>
  )
}
