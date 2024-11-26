/* eslint-disable react/no-unused-prop-types */
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
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

const Component = memo(
  (props: {
    name: string
    config: { name: string; address: string }
    fn: () => void
  }) => {
    // Modificare il context causerà un re-render, memo ha effetto solo se il componente ha props
    const theme = useContext(ThemeContext)
    // Aggiornare uno stato causerà un re-render
    const [iscritto, setIscritto] = useState(false)
    console.log(`Momoized component re-rendered`)
    return (
      <Card
        className={cn(`w-full mt-4`, {
          "bg-violet-50": theme === `light`,
          "bg-green-500": iscritto,
          "bg-green-900": iscritto && theme === `dark`,
        })}
      >
        <CardHeader>
          <CardTitle
            className={cn(`text-xl`, {
              "text-neutral-900": theme === `light`,
              "text-white": theme === `dark`,
            })}
          >
            Ciao {props.name}, sei un grande
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
)

const ManuallyMemoizedComponent = memo(
  (props: { count: number }) => {
    console.log(`Manually memoized component re-rendered`)
    if (props.count % 2 === 0) {
      return <div>{props.count} is even</div>
    }
    return <div>{props.count} is odd</div>
  },
  (prevProps, nextProps) => prevProps.count % 2 === nextProps.count % 2
)

// Il nostro componente fa il re-render ogni volta che il nome cambia, ma non quando cambia l'indirizzo
export const ReactMemoResult = () => {
  const [name, setName] = useState(`John`)
  const [address, setAddress] = useState(`Via Roma 1`)
  const [theme, setTheme] = useState<`light` | `dark`>(`dark`)
  /* Se non memoizzato causerà un re-render ogni volta che cambia un qualsiasi stato perché memo
  compara le props usando Object.is:
  -  Object.is("John", "John") è true
  -  Object.is({}, {}) è false
  */
  const config = useMemo(
    () => ({
      name,
      address: `Evviva`,
    }),
    [name]
  )

  /* Se non memoizzato, ogni volta che cambia un qualsiasi stato, la funzione che verrà passata sarà nuova
  vedi lezione su useCallback */
  const fn = useCallback(() => {
    console.log(`Sono la funzione`)
  }, [])

  // Componente memorizzato manualmente
  const [count, setCount] = useState(0)

  const updateCount = useCallback(
    () =>
      setCount((prev) => {
        if (prev < 5) {
          return prev + 2
        }
        if (prev > 100) {
          return prev + 1
        }
        return prev * 2 + 1
      }),
    []
  )

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
        <Component name={name} config={config} fn={fn} />
      </ThemeContext.Provider>
      <hr className="my-4" />
      <ManuallyMemoizedComponent count={count} />
      <Button onClick={updateCount}>Update count</Button>
      <Code className="w-fit">Valore di count: {count}</Code>
    </div>
  )
}
