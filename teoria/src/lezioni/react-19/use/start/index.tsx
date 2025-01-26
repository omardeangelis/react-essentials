import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ThemeContextType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContextType>({
  theme: `light`,
  setTheme: () => {},
})

const ReadContext = () => {
  const ctx = useContext(ThemeContext)

  return (
    <Card
      className={cn({
        "bg-blue-500": ctx.theme === `light`,
        "bg-blue-950": ctx.theme === `dark`,
      })}
    >
      <CardHeader>
        <CardTitle>Theme</CardTitle>
      </CardHeader>
      <CardContent>{ctx.theme}</CardContent>
      <CardFooter>
        <Button
          variant={ctx.theme === `light` ? `default` : `outline`}
          onClick={() => ctx.setTheme(ctx.theme === `light` ? `dark` : `light`)}
        >
          Change Theme
        </Button>
      </CardFooter>
    </Card>
  )
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(`light`)

  const ctx = useMemo(() => ({ theme, setTheme }), [theme, setTheme])
  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>
}

// const fakePromise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve(`This is the message`)
//   }, 2000)
// })

// const promiseWithError = new Promise<{
//   message: string
//   status: number
// }>((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error(`This is the error`))
//   }, 5000)
// })

export const React19UseStart = () => (
  <ThemeProvider>
    <ReadContext />
  </ThemeProvider>
)
