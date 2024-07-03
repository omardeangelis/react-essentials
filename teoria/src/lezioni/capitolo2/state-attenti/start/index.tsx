/* eslint-disable no-alert */
import { useState } from "react"
import { ExampleCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { solutions } from "../constants"

const AggiornarePiuVolteLoState = () => {
  const [state] = useState(0)
  const [hasTryed, setHasTryed] = useState(false)

  // State è lo stesso fino a quando il componente non viene rirenderizzato
  const increment = () => {
    setHasTryed(true)
  }

  const showWhy = () => {
    alert(solutions.first)
    setHasTryed(false)
  }

  return (
    <ExampleCard>
      <div>
        <p className="mb-2">Aumentiamo 3 volte di uno il valore</p>
        <div className="flex gap-4">
          <Button onClick={increment}>Incrementa</Button>
          {hasTryed && (
            <Button variant="destructive" onClick={showWhy}>
              Perché?
            </Button>
          )}
        </div>
      </div>
      {state}
    </ExampleCard>
  )
}

const StateFattiVedere = () => {
  const [state] = useState(0)
  const [hasTryed, setHasTryed] = useState(false)

  const increment = () => {}

  const showWhy = () => {
    alert(solutions.second)
    setHasTryed(false)
  }

  return (
    <ExampleCard>
      <div>
        <p className="mb-2">Ah, quindi aumenta una volta sola!</p>
        <div className="flex gap-4">
          <Button onClick={increment}>Incrementa</Button>
          {hasTryed && (
            <Button variant="destructive" onClick={showWhy}>
              Perché?
            </Button>
          )}
        </div>
      </div>
      {state}
    </ExampleCard>
  )
}

const StateWithDelay = () => {
  const [state] = useState(0)
  const [hasTryed, setHasTryed] = useState(false)

  const increment = () => {}

  const showWhy = () => {
    alert(solutions.third)
    setHasTryed(false)
  }

  return (
    <ExampleCard>
      <div>
        <p className="mb-2">Ah, basta far riaggiornare il componente allora</p>
        <div className="flex gap-4">
          <Button onClick={increment}>Incrementa</Button>
          {hasTryed && (
            <Button variant="destructive" onClick={showWhy}>
              Perché?
            </Button>
          )}
        </div>
      </div>
      {state}
    </ExampleCard>
  )
}

const AzzEComeSiFa = () => {
  const [state] = useState(0)
  const [hasTryed, setHasTryed] = useState(false)

  const increment = () => {}

  const showWhy = () => {
    alert(solutions.fourth)
    setHasTryed(false)
  }

  return (
    <ExampleCard>
      <div>
        <p className="mb-2">Riprovo un'ultima volta</p>
        <div className="flex gap-4">
          <Button onClick={increment}>Incrementa</Button>
          {hasTryed && (
            <Button variant="destructive" onClick={showWhy}>
              Perché?
            </Button>
          )}
        </div>
      </div>
      {state}
    </ExampleCard>
  )
}

const AAAHoCapito = () => {
  const [state] = useState(0)
  const [hasTryed, setHasTryed] = useState(false)

  const increment = () => {}

  const showWhy = () => {
    alert(solutions.fifth)
    setHasTryed(false)
  }

  return (
    <ExampleCard>
      <div>
        <p className="mb-2">No scherzavo, ora è l'ultima</p>
        <div className="flex gap-4">
          <Button onClick={increment}>Incrementa</Button>
          {hasTryed && (
            <Button variant="destructive" onClick={showWhy}>
              Perché?
            </Button>
          )}
        </div>
      </div>
      {state}
    </ExampleCard>
  )
}

export const StateVirgolaAttentiInizio = () => (
  <div className="flex flex-col gap-4">
    <AggiornarePiuVolteLoState />
    <StateFattiVedere />
    <StateWithDelay />
    <AzzEComeSiFa />
    <AAAHoCapito />
  </div>
)
