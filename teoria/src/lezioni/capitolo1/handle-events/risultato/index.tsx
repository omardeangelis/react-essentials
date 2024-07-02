/* eslint-disable no-console */
/* eslint-disable no-alert */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const handleFunction = () => {
  alert(`Registrati al Canale!`)
}

const handleFuctionWithEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log(event.target)
  alert(`Registrati al Canale!`)
}

const handleFunctionWithParams = (param: string) => {
  alert(param)
}

const wrongHandleFunctionWithParams = (param: string) => {
  // alert(param)
  console.log(param)
}

const handleFunctionWithParamsAndEvent =
  (params: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target)
    alert(params)
  }

export const HandleEventsResults = () => (
  <div className="pt-6">
    <div className="grid grid-cols-2 gap-4">
      <Card className="flex items-center justify-between bg-background">
        <CardHeader>
          <CardTitle>Inline</CardTitle>
          <CardDescription className="text-neutral-400">
            Definire una callback direttamente nell'elemento
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <Button onClick={() => alert(`Evviva Evviva`)}>Esegui</Button>
        </CardContent>
      </Card>
      <Card className="flex items-center justify-between bg-background">
        <CardHeader>
          <CardTitle>Function</CardTitle>
          <CardDescription className="text-neutral-400">
            Definire una funzione e passarla come callback
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <Button onClick={handleFunction}>Esegui</Button>
        </CardContent>
      </Card>
      <Card className="flex items-center justify-between bg-background">
        <CardHeader>
          <CardTitle>Function with event</CardTitle>
          <CardDescription className="text-neutral-400">
            Definire una funzione con un parametro evento
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <Button onClick={handleFuctionWithEvent}>Esegui</Button>
        </CardContent>
      </Card>

      <Card className="flex items-center justify-between bg-background">
        <CardHeader>
          <CardTitle>Wrong Function With Params</CardTitle>
          <CardDescription className="text-neutral-400">
            La funzione viene eseguita al render e ritorna undefined al click
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          {/* @ts-expect-errors */}
          <Button onClick={wrongHandleFunctionWithParams(`errore`)}>
            Esegui
          </Button>
        </CardContent>
      </Card>
      <Card className="flex items-center justify-between bg-background">
        <CardHeader>
          <CardTitle>Function with params</CardTitle>
          <CardDescription className="text-neutral-400">
            Definire una funzione con parametri
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <Button onClick={() => handleFunctionWithParams(`evviva`)}>
            Esegui
          </Button>
        </CardContent>
      </Card>
      <Card className="flex items-center justify-between bg-background">
        <CardHeader>
          <CardTitle>Function with params and event</CardTitle>
          <CardDescription className="text-neutral-400">
            Definire una funzione con parametri che ritorna callback function
            per gestire l'evento
          </CardDescription>
        </CardHeader>
        <CardContent className="py-0">
          <Button onClick={handleFunctionWithParamsAndEvent(`evviva evviva`)}>
            Esegui
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
)
