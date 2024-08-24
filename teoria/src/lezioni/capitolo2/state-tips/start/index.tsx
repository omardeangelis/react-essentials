import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ExampleCard } from "@/components/ui/card"

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function createInitialTodos() {
  console.log(`createInitialTodos`)
  const initialTodos = []
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: `Item ${i + 1}`,
    })
  }
  return initialTodos
}

const StateInitiazializer = () => {
  const [todos, setTodos] = useState([] as { id: number; text: string }[])
  const [text, setText] = useState(``)
  return (
    <>
      <div className="flex gap-2">
        <Input
          value={text}
          className="w-1/2"
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="button"
          onClick={() => {
            setText(``)
            setTodos([
              {
                id: todos.length,
                text,
              },
              ...todos,
            ])
          }}
        >
          Add
        </Button>
      </div>
      <ul className="mt-2">
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  )
}

const ResetStateWithKey = () => {
  const [version, setVersion] = useState(0)
  const handleReset = () => {
    setVersion(version + 1)
  }

  return (
    <div className="space-y-4">
      <Button variant="destructive" onClick={handleReset}>
        Reset
      </Button>
      <RandomColoredCard key={version} />
    </div>
  )
}

const RandomColoredCard = () => {
  const [color, setColor] = useState(`#123`)
  const handleColorChange = () => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  }
  return (
    <ExampleCard>
      <div
        className="flex justify-center items-center h-32 min-w-32 w-full"
        style={{ backgroundColor: color }}
      >
        <Button onClick={handleColorChange}>Change Color</Button>
      </div>
    </ExampleCard>
  )
}

export const StateTipsInizio = () => (
  <div className="space-y-4">
    <Accordion type="single" collapsible>
      <AccordionItem value="1">
        <AccordionTrigger>
          Problemi di inizializzaione dello stato
        </AccordionTrigger>
        <AccordionContent>
          <StateInitiazializer />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionTrigger>
          Resettare uno stato modificando il key attribute
        </AccordionTrigger>
        <AccordionContent>
          <ResetStateWithKey />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
)
