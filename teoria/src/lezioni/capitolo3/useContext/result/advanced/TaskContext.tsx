import { createContext, Dispatch, useContext, useMemo, useReducer } from "react"

type Action = {
  type: "ADD_TASK" | "CHANGE_TASK" | "DELETE_TASK" | "RESET"
  payload?: any
}

type Task = {
  id: number
  text: string
  done: boolean
}

type Store = {
  tasks: Task[]
}

const reducer = (state: Store, action: Action): Store => {
  switch (action.type) {
    case `ADD_TASK`:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length,
            text: action.payload,
            done: false,
          },
        ],
      }
    case `CHANGE_TASK`:
      action.payload as Task
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload
          }
          return task
        }),
      }
    case `DELETE_TASK`:
      action.payload as Task["id"]
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case `RESET`:
      return {
        ...state,
        tasks: [],
      }
    default:
      return state
  }
}

const initialTasks = [
  { id: 0, text: `Iscriversi al canale`, done: true },
  { id: 1, text: `Scrivere un Reducer`, done: false },
  { id: 2, text: `Dispatchare la action`, done: false },
]

const TaskContext = createContext<{
  tasks: Task[]
  dispatch: Dispatch<Action>
}>({ tasks: [], dispatch: () => {} })

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { tasks: initialTasks })

  const value = useMemo(
    () => ({ tasks: state.tasks, dispatch }),
    [state.tasks, dispatch]
  )

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TaskContext)
