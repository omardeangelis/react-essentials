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

export const InizioUpdatingUI = () => (
  <div className="flex flex-col gap-4">
    <StartinWrongIsAlwaysAGoodIdea />
  </div>
)
