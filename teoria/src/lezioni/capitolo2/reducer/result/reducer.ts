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

export const reducer = (state: Store, action: Action): Store => {
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
