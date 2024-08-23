type ActionWithPayload<P> = {
  type: "ADD_TASK" | "CHANGE_TASK" | "DELETE_TASK"
  payload?: P
}

export type Task = {
  id: number
  text: string
  done: boolean
}

export type AppStore = {
  tasks: Task[]
}

export const reducer = (
  state: AppStore,
  action: ActionWithPayload<any>
): AppStore => {
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
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.payload.id) {
            return action.payload
          }
          return t
        }),
      }
    case `DELETE_TASK`:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      }
    default:
      return state
  }
}
