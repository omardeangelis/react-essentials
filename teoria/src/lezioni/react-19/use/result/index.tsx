import { createContext, Suspense, use, useMemo, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

const ThemeContext = createContext({
  theme: `light`,
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: string) => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(`light`)

  const ctx = useMemo(() => ({ theme, setTheme }), [theme, setTheme])
  // React19 Non necessita più di usare Context.Provider
  return <ThemeContext value={ctx}>{children}</ThemeContext>
}

const ReadContext = ({ variant }: { variant: 1 | 2 }) => {
  // Utilizzo condizionale di use, che lo rende preferibile a useContext
  if (variant === 1) {
    const ctx = use(ThemeContext)

    return (
      <div className="flex flex-col gap-4">
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
              onClick={() =>
                ctx.setTheme(ctx.theme === `light` ? `dark` : `light`)
              }
            >
              Change Theme
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  return (
    <Card className="bg-violet-950">
      <CardHeader>
        <CardTitle>Variant {variant} is not available now</CardTitle>
      </CardHeader>
    </Card>
  )
}

// esempi delle promise vanno contestualizzate in rispetto ai server component
// creare promise sul client è un errore.
const fakePromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve(`This is the message`)
  }, 2000)
})

const WorkingWithPromise = ({ message }: { message: Promise<string> }) => {
  const promiseMessage = use(message)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Promise Message</CardTitle>
      </CardHeader>
      <CardContent>{promiseMessage}</CardContent>
    </Card>
  )
}

const promiseWithError = new Promise<{
  message: string
  status: number
}>((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`This is the error`))
  }, 5000)
}).catch(() => ({
  message: `This is the error`,
  status: 500,
}))

const WorkingWithPromiseWithError = ({
  message,
}: {
  message: Promise<{ message: string; status: number }>
}) => {
  const promiseMessage = use(message)
  return (
    <Card className={cn({ "bg-red-950": promiseMessage.status === 500 })}>
      <CardHeader>
        <CardTitle>Promise Message</CardTitle>
      </CardHeader>
      <CardContent>{promiseMessage.message}</CardContent>
    </Card>
  )
}

export const React19UseResult = () => (
  <ThemeProvider>
    <div className="flex flex-col gap-4">
      <ReadContext variant={1} />
      <ReadContext variant={2} />
      <Suspense fallback={<Skeleton className="h-20 w-full" />}>
        <WorkingWithPromise message={fakePromise} />
      </Suspense>
      <ErrorBoundary
        fallback={
          <Card className="bg-red-950">
            <CardHeader>
              <CardTitle>Something went wrong</CardTitle>
            </CardHeader>
          </Card>
        }
      >
        <Suspense fallback={<Skeleton className="h-20 w-full" />}>
          <WorkingWithPromiseWithError message={promiseWithError} />
        </Suspense>
      </ErrorBoundary>
    </div>
  </ThemeProvider>
)
