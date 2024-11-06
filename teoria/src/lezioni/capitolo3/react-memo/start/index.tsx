/* eslint-disable react/no-unused-prop-types */
import { createContext, useContext, useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

const ThemeContext = createContext<`light` | `dark`>(`light`)

const UnoptimizedComponent = (props: { name: string }) => {
  const theme = useContext(ThemeContext)
  const [iscritto, setIscritto] = useState(false)
  console.log(
    `Sono le ${new Date().toLocaleTimeString()} e non ti sei ancora iscritto al canale`
  )
  return (
    <Card
      className={cn(`w-full mt-4`, {
        "bg-violet-50": theme === `light`,
        "bg-violet-500": iscritto,
        "bg-violet-900": iscritto && theme === `dark`,
      })}
    >
      <CardHeader>
        <CardTitle
          className={cn(`text-xl`, {
            "text-neutral-900": theme === `light`,
            "text-white": theme === `dark`,
          })}
        >
          Ciao {props.name}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-row gap-4">
        <Checkbox
          className={cn(`border-neutral-900`, {
            "border-white": theme === `dark`,
            "border-neutral-900": theme === `light`,
          })}
          id="iscritto"
          checked={iscritto}
          onCheckedChange={(checked) => setIscritto(checked as boolean)}
        />
      </CardFooter>
    </Card>
  )
}

const ManuallyMemoizedComponent = (props: { count: number }) => {
  console.log(`Manually memoized component re-rendered`)
  if (props.count % 2 === 0) {
    return <div>{props.count} is even</div>
  }
  return <div>{props.count} is odd</div>
}

// Il nostro componente fa il re-render ogni volta che il nome cambia, ma non quando cambia l'indirizzo
export const ReactMemoStart = () => {
  const [name, setName] = useState(`John`)
  const [address, setAddress] = useState(`Via Roma 1`)
  const [theme, setTheme] = useState<`light` | `dark`>(`dark`)
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="name">
        Name:
        <Input
          id="name"
          type="text"
          value={name}
          className="w-full mt-2"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="address">
        Address:
        <Input
          id="address"
          type="text"
          value={address}
          className="w-full mt-2"
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <Button
        variant="outline"
        className="mt-4"
        onClick={() => setTheme(theme === `light` ? `dark` : `light`)}
      >
        Cambia tema
      </Button>
      <ThemeContext.Provider value={theme}>
        <UnoptimizedComponent name={name} />
        {/* <Component name={name} config={config} fn={fn} /> */}
      </ThemeContext.Provider>
      <hr className="my-4" />
      <ManuallyMemoizedComponent count={count} />
      <Button onClick={() => setCount(count + 1)}>Update count</Button>
      <Code className="w-fit">Valore di count: {count}</Code>
    </div>
  )
}
