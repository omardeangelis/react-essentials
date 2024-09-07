/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExampleCard } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const UseRefBasic = () => {
  const [value, setValue] = useState(0)
  const increment = useRef(0)

  // useRef ritorna un oggetto che ha una proprietà current
  const handleClick = () => {}

  // useRef non causa un re-render quando cambia il valore
  const incrementincrementOnly = () => {}

  return (
    <div className="flex flex-col gap-4">
      <ExampleCard>
        <p>Value: {value}</p>
        <p>increment: {increment.current}</p>
        <Button type="button" onClick={handleClick}>
          Add 1
        </Button>
      </ExampleCard>
      <ExampleCard>
        <p>increment: {increment.current}</p>
        <Button type="button" onClick={incrementincrementOnly}>
          Add 100
        </Button>
      </ExampleCard>
    </div>
  )
}

const UseRefDom = () => {
  // useRef può essere usato per accedere a un elemento del DOM

  const handleClick = () => {}

  const handlePrint = () => {}

  return (
    <ExampleCard>
      <form>
        <Input name="name" className="mr-6" />
      </form>
      <div className="flex gap-2">
        <Button type="button" onClick={handleClick}>
          Focus
        </Button>
        <Button type="button" variant="secondary" onClick={handlePrint}>
          Print
        </Button>
      </div>
    </ExampleCard>
  )
}

type Timer = ReturnType<typeof setInterval>

const RefForTimout = () => {
  const [timer, setTimer] = useState(100)
  const [isRunning, setIsRunning] = useState(false)

  const handleStart = () => {}

  const handleStop = () => {}

  const handleReset = () => {}

  return (
    <ExampleCard>
      <p>Countdown: {timer} seconds</p>
      <p>Is running: {isRunning ? `Yes` : `No`}</p>
      <div className="flex gap-2">
        <Button type="button" onClick={handleStart} disabled={isRunning}>
          Start
        </Button>
        <Button type="button" onClick={handleStop} disabled={!isRunning}>
          Stop
        </Button>
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </ExampleCard>
  )
}

const CustomComponent = ({ name }: { name: string }) => <Input name={name} />

const UseRefForwardRef = () => {
  const handleClick = () => {}

  return (
    <ExampleCard>
      <CustomComponent name="name" />
      <Button type="button" onClick={handleClick}>
        Focus
      </Button>
    </ExampleCard>
  )
}

export const UseRefStart = () => (
  <div className="flex flex-col gap-4">
    <UseRefBasic />
    {/* <UseRefDom />
    <UseRefForwardRef />
    <RefForTimout /> */}
  </div>
)
