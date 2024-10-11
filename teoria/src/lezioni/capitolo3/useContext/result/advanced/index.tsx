import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { TaskProvider, useTasks } from "./TaskContext"

type Task = {
  id: number
  text: string
  done: boolean
}

const AddTask = () => {
  const [text, setText] = useState(``)
  const { dispatch } = useTasks()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch({ type: `ADD_TASK`, payload: text })
    setText(``)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-4"
    >
      <Input
        className="w-2/3 "
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button className="w-1/3" type="submit">
        Add
      </Button>
    </form>
  )
}

type TaskCardProps = {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const { dispatch } = useTasks()
  let taskContent: JSX.Element
  if (isEditing) {
    taskContent = (
      <Input
        value={task.text}
        onChange={(e) =>
          dispatch({
            type: `CHANGE_TASK`,
            payload: { ...task, text: e.target.value },
          })
        }
      />
    )
  } else {
    taskContent = (
      <span style={{ textDecoration: task.done ? `line-through` : `none` }}>
        {task.text}
      </span>
    )
  }
  return (
    <Card className="">
      <CardContent className="flex items-center gap-4 py-3">
        <div className="flex items-center gap-4 w-full">
          <Checkbox
            checked={task.done}
            onCheckedChange={(checked) =>
              dispatch({
                type: `CHANGE_TASK`,
                payload: {
                  ...task,
                  done: checked && checked !== `indeterminate`,
                },
              })
            }
          />
          {taskContent}
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="success"
            size="sm"
            type="button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? `Save` : `Edit`}
          </Button>
          <Button
            size="sm"
            variant="destructive"
            type="button"
            onClick={() => dispatch({ type: `DELETE_TASK`, payload: task.id })}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const TaskList = () => {
  const { tasks } = useTasks()
  return (
    <ul className="space-y-4 mt-4">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  )
}
export const TaskApp = () => {
  const { dispatch } = useTasks()

  function handleReset() {
    dispatch({ type: `RESET` })
  }

  return (
    <TaskProvider>
      <h2 className="mb-4">Step per implementare un Reducer in React</h2>
      <AddTask />
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <TaskList />
    </TaskProvider>
  )
}
