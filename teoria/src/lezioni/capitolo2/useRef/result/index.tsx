import { forwardRef, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExampleCard } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const UseRefBasic = () => {
  const [value, setValue] = useState(0)
  const increment = useRef(0)

  // useRef ritorna un oggetto che ha una proprietà current
  const handleClick = () => {
    setValue((old) => {
      const nextValue = old + 1
      increment.current += nextValue * 2
      return nextValue
    })
  }

  // useRef non causa un re-render quando cambia il valore
  const incrementincrementOnly = () => {
    increment.current += 100
  }

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
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleClick = () => {
    console.log(inputRef.current)
    inputRef.current?.focus()
  }

  const handlePrint = () => {
    console.log(formRef.current)
    const formData = new FormData(formRef.current as HTMLFormElement)
    console.log(formData.get(`name`))
    formRef.current?.reset()
  }

  return (
    <ExampleCard>
      <form ref={formRef}>
        <Input ref={inputRef} name="name" className="mr-6" />
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
  const intervalRef = useRef<Timer | null>(null)

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true)
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 0) {
            handleStop()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }
  }

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsRunning(false)
  }

  const handleReset = () => {
    handleStop()
    setTimer(100)
  }

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

const CustomComponent = forwardRef<HTMLInputElement, { name: string }>(
  ({ name }, ref) => <Input ref={ref} name={name} />
)

CustomComponent.displayName = `CustomComponent`

const UseRefForwardRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <ExampleCard>
      <CustomComponent ref={inputRef} name="name" />
      <Button type="button" onClick={handleClick}>
        Focus
      </Button>
    </ExampleCard>
  )
}

export const UseRefResult = () => (
  <div className="flex flex-col gap-4">
    <UseRefBasic />
    <UseRefDom />
    <UseRefForwardRef />
    <RefForTimout />
  </div>
)
