import { Suspense, use, useState } from "react"
import { Button } from "@/components/ui/button"
import { fetchData, updateQuantity } from "../api"
import { Input } from "@/components/ui/input"

const tabs = [`quantity`, `messages`, `test`] as const

type Tab = (typeof tabs)[number]

const SlowMessage = ({ index }: { index: number }) => {
  const startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Stop the thread for 1ms per simulare un codice molto lento
  }
  return <div>SlowMessage {index}</div>
}

const MessageTab = () => {
  const messages = []
  for (let i = 0; i < 500; i++) {
    messages.push(<SlowMessage key={i} index={i} />)
  }
  return <div>{messages}</div>
}

const QuantityTab = () => <div>QuantityTab</div>

const NonBlockingUI = () => {
  const [tab, setTab] = useState<Tab>(`quantity`)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">NonBlockingUI</h2>
      <div className="flex gap-4">
        {tabs.map((t) => (
          <Button
            key={t}
            onClick={() => {
              setTab(t)
            }}
            variant={tab === t ? `success` : `outline`}
          >
            {t}
          </Button>
        ))}
      </div>

      {tab === `quantity` && <QuantityTab />}
      {tab === `messages` && <MessageTab />}
      {tab === `test` && <div>Test</div>}
    </div>
  )
}

const FetchingData = () => {
  const messages = use(fetchData(`messages`))
  return (
    <div>
      {messages.map((m) => (
        <FetchedMessages key={m.id} text={m.text} />
      ))}
    </div>
  )
}

const FetchedMessages = ({ text }: { text: string }) => <div>{text}</div>

const AvoidingUnnecessaryUpdates = () => {
  const [tab, setTab] = useState<Tab>(`quantity`)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">AvoidingUnnecessaryUpdates</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex gap-4">
          {tabs.map((t) => (
            <Button
              key={t}
              onClick={() => setTab(t)}
              variant={tab === t ? `success` : `outline`}
            >
              {t}
            </Button>
          ))}
        </div>
        {tab === `quantity` && <QuantityTab />}
        {tab === `messages` && <FetchingData />}
        {tab === `test` && <div>Test</div>}
      </Suspense>
    </div>
  )
}

const AsyncQuantityTab = () => {
  const [quantity, setQuantity] = useState(1)

  const updateQuantityAction = async (newQuantity: number) => {
    // To access the pending state of a transition,
    // call startTransition again.
    const savedQuantity = await updateQuantity(newQuantity)
    setQuantity(savedQuantity)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value)
    updateQuantityAction(newQuantity)
  }
  return (
    <div className="flex flex-col gap-4">
      <div>QuantityTab</div>
      <Input
        type="number"
        onChange={onInputChange}
        min={1}
        max={100}
        defaultValue={1}
      />
      <p>
        Quantity:{` `}
        {Intl.NumberFormat(`it-IT`, {
          style: `currency`,
          currency: `EUR`,
        }).format(quantity * 9999)}
      </p>
    </div>
  )
}

const AsyncTransition = () => {
  const [tab, setTab] = useState<Tab>(`quantity`)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">AsyncTransition</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex gap-4">
          {tabs.map((t) => (
            <Button
              key={t}
              onClick={() => setTab(t)}
              variant={tab === t ? `success` : `outline`}
            >
              {t}
            </Button>
          ))}
        </div>
        {tab === `quantity` && <AsyncQuantityTab />}
        {tab === `messages` && <FetchingData />}
        {tab === `test` && <div>Test</div>}
      </Suspense>
    </div>
  )
}

export const UseTransitionStart = () => (
  <div className="flex flex-col gap-4">
    <NonBlockingUI />
    <hr />
    <AvoidingUnnecessaryUpdates />
    <hr />
    <AsyncTransition />
  </div>
)
