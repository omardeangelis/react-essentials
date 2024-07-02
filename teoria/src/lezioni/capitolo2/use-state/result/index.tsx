import { useState } from "react"
import { Button } from "@/components/ui/button"

const state = {
  count: 0,
}

const increment = () => {
  state.count++
  // eslint-disable-next-line no-console
  console.log(state.count)
  // Aggiorno la ui
}

const StartinWrongIsAlwaysAGoodIdea = () => {
  // eslint-disable-next-line no-console
  console.log(`state.count`, state.count)
  return (
    <div className="p-4 flex items-center justify-between bg-card rounded-md border">
      <div>
        <h2 className="text-xl font-bold">Come non farlo funzionare</h2>
        <p className="mt-2">
          Il valore di <code>count</code> è <code>{state.count}</code>
        </p>
      </div>
      <Button
        type="button"
        onClick={increment}
        //   className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Incrementa
      </Button>
    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="p-4 flex items-center justify-between bg-card rounded-md border">
      <div>
        <h2 className="text-xl font-bold">Come farlo funzionare</h2>
        <p className="mt-2">
          Il valore di <code>count</code> è <code>{count}</code>
        </p>
      </div>
      <Button type="button" onClick={() => setCount(count + 1)}>
        Incrementa
      </Button>
    </div>
  )
}

type CounterProps = {
  count: number
  increment: () => void
}

const CounterWithProps = (props: CounterProps) => (
  <div className="p-4 flex items-center justify-between bg-blue-800 rounded-md border">
    <div>
      <h2 className="text-xl font-bold">Contatore Gemellini</h2>
      <p className="mt-2">
        Il valore di <code>count</code> è <code>{props.count}</code>
      </p>
    </div>
    <Button type="button" onClick={props.increment}>
      Incrementa
    </Button>
  </div>
)

const SharedStates = () => {
  const [count, setCount] = useState(0)
  const incrementCounter = () => setCount(count + 1)
  return (
    <div className="flex flex-col gap-4">
      <CounterWithProps count={count} increment={incrementCounter} />
      <CounterWithProps count={count} increment={incrementCounter} />
    </div>
  )
}

export const RisultatoUpdatingUI = () => (
  <div className="flex flex-col gap-4">
    <StartinWrongIsAlwaysAGoodIdea />
    <Counter />
    <Counter />
    <SharedStates />
  </div>
)
