import { FormEvent, memo, useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const FormComponent = memo(
  (props: { handleSubmit: (value: string) => void }) => {
    console.log(`FormComponent render`)
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

// 1. Quando vogliamo passare una funzione come prop
const OptimizedComponent = ({
  theme,
  productId,
}: {
  theme: string
  productId: string
}) => {
  //   const handleSubmit = useCallback((value: string) => {
  //     console.log(`submit ${value} ${productId}`)
  //   }, [])
  const handleSubmit = useCallback(
    (value: string) => {
      console.log(`submit ${value} ${productId}`)
    },
    [productId]
  )
  return (
    <div className={`theme-${theme}`}>
      <p className="mb-4">{theme} OptimizedComponent</p>
      <FormComponent handleSubmit={handleSubmit} />
    </div>
  )
}

// Quando conviene usare useCallback?

// 2. Quando aggiornare uno state in una funzione memoizzata
const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([])

  // const addTodoWithDeps = useCallback(
  //   (todo: string) => {
  //     setTodos([...todos, todo])
  //   },
  //   [todos]
  // )

  // versione furba
  const addTodo = useCallback((todo: string) => {
    setTodos((prev) => [...prev, todo])
  }, [])

  // 3. Quando uno useEffect dipende da una funzione
  // const createConfig = useCallback(
  //   () => ({
  //     todo: `todo`,
  //   }),
  //   []
  // )

  useEffect(() => {
    // soluzione semplice
    const createConfig = () => ({
      todo: `todo`,
    })
    createConfig()
    console.log(`createConfig`)
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
      <div className="mt-4">
        <FormComponent handleSubmit={addTodo} />
      </div>
    </div>
  )
}

// 4. Quando ritorniamo delle funzioni dai un custom hook
const useCreateConfig = () => {
  // const createConfig = () => ({
  //   todo: `todo`,
  // })

  const createConfig = useCallback(
    () => ({
      todo: `todo`,
    }),
    []
  )

  return createConfig
}

const UseCreateConfigComponent = () => {
  const createConfig = useCreateConfig()
  useEffect(() => {
    createConfig()
    console.log(`useCreateConfigEffect`)
  }, [createConfig])
  return <div>UseCreateConfigComponent</div>
}

export const UseCallbackResult = () => {
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
      <hr className="my-4" />
      <OptimizedComponent theme={theme} productId={productId} />
      <hr className="my-4" />
      <TodoList />
      <hr className="my-4" />
      <UseCreateConfigComponent />
    </div>
  )
}
