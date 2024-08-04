import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

type Task = {
  id: number
  text: string
  done: boolean
}

const AddTask = ({ onAddTask }: { onAddTask: (text: string) => void }) => {
  const [text, setText] = useState(``)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onAddTask(text)
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

type TaskListProps = {
  tasks: Pick<Task, "done" | "id" | "text">[]
  onChangeTask: (task: Task) => void
  onDeleteTask: (taskId: number) => void
}

type TaskCardProps = {
  task: Task
  onChangeTask: (task: Task) => void
  onDeleteTask: (taskId: number) => void
}

const TaskCard = ({ task, onChangeTask, onDeleteTask }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false)
  let taskContent: JSX.Element
  if (isEditing) {
    taskContent = (
      <Input
        value={task.text}
        onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
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
              onChangeTask({
                ...task,
                done: checked && checked !== `indeterminate`,
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
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const TaskList = ({ tasks, onChangeTask, onDeleteTask }: TaskListProps) => (
  <ul className="space-y-4 mt-4">
    {tasks.map((task) => (
      <li key={task.id}>
        <TaskCard
          task={task}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
        />
      </li>
    ))}
  </ul>
)
const TaskApp = () => {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text,
        done: false,
      },
    ])
  }

  function handleChangeTask(task: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task
        }
        return t
      })
    )
  }

  function handleDeleteTask(taskId: Task["id"]) {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }

  return (
    <>
      <h2 className="mb-4">Step per implementare un Reducer in React</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

let nextId = 3
const initialTasks = [
  { id: 0, text: `Iscriversi al canale`, done: true },
  { id: 1, text: `Scrivere un Reducer`, done: false },
  { id: 2, text: `Dispatchare la action`, done: false },
  { id: 3, text: `Spostare la logica`, done: false },
]

export const UserReducerRisultato = () => <TaskApp />
