import { createContext, useContext, useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TaskApp } from "./advanced"

const ThemeContext = createContext<"light" | "dark">(`light`)

const Item = () => {
  const theme = useContext(ThemeContext)

  return (
    <Card
      className={cn(
        `mt-4`,
        theme === `light` ? `bg-violet-50` : `bg-violet-700/30`
      )}
    >
      <CardContent className="p-4">
        <p
          className={cn(
            `text-sm`,
            theme === `light` ? `text-black` : `text-white`
          )}
        >
          Il tema della card è: {theme}
        </p>
      </CardContent>
    </Card>
  )
}

const BasicContext = () => (
  <ThemeContext.Provider value="dark">
    <Item />
    <ThemeContext.Provider value="light">
      <Item />
    </ThemeContext.Provider>
  </ThemeContext.Provider>
)

const ThemeDynamicContext = createContext<{
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}>({ theme: `light`, setTheme: () => {} })

const ThemeDynamicProvider = ({
  children,
  initialTheme = `light`,
}: {
  children: React.ReactNode
  initialTheme?: "light" | "dark"
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme)
  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  return (
    <ThemeDynamicContext.Provider value={value}>
      {children}
    </ThemeDynamicContext.Provider>
  )
}

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeDynamicContext)

  return (
    <Button
      className={cn(
        `w-fit`,
        theme === `light`
          ? `bg-blue-700 text-white hover:bg-blue-800`
          : `bg-blue-50 text-black hover:bg-blue-100`
      )}
      onClick={() => setTheme(theme === `light` ? `dark` : `light`)}
    >
      {theme === `light` ? `dark` : `light`} theme
    </Button>
  )
}

const DynamicItem = () => {
  const { theme } = useContext(ThemeDynamicContext)
  return (
    <Card
      className={cn(
        `mt-4`,
        theme === `light` ? `bg-blue-50` : `bg-blue-700/30`
      )}
    >
      <CardContent className="p-4 flex flex-row justify-between items-center gap-2">
        <p
          className={cn(
            `text-sm`,
            theme === `light` ? `text-black` : `text-white`
          )}
        >
          Il tema della card è: {theme}
        </p>
        <ThemeToggler />
      </CardContent>
    </Card>
  )
}

const DynamicContext = () => (
  <ThemeDynamicProvider initialTheme="dark">
    <DynamicItem />
    <ThemeDynamicProvider initialTheme="light">
      <DynamicItem />
    </ThemeDynamicProvider>
  </ThemeDynamicProvider>
)

const UserContext = createContext<{
  name: string
  surname: string
}>({ name: `John`, surname: `Doe` })

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState(`John`)
  const [surname, setSurname] = useState(`Doe`)
  const value = useMemo(
    () => ({ name, setName, surname, setSurname }),
    [name, setName, surname, setSurname]
  )
  return (
    <ThemeDynamicProvider initialTheme="dark">
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </ThemeDynamicProvider>
  )
}

const GlobalItem = () => {
  const { name } = useContext(UserContext)
  const { theme } = useContext(ThemeDynamicContext)
  return (
    <Card
      className={cn(
        `mt-4`,
        theme === `light` ? `bg-violet-50` : `bg-violet-700/30`
      )}
    >
      <CardContent className="p-4 flex flex-row justify-between items-center gap-2">
        <p
          className={cn(
            `text-sm`,
            theme === `light` ? `text-black` : `text-white`
          )}
        >
          Il nome dell'utente è: {name}
        </p>
        <ThemeToggler />
      </CardContent>
    </Card>
  )
}

export const ContextResult = () => (
  <div className="[&>*]:mt-4">
    <BasicContext />
    <DynamicContext />
    <GlobalProvider>
      <GlobalItem />
    </GlobalProvider>
    <hr className="my-4" />
    <h2 className="mb-4">Advanced Example</h2>
    <TaskApp />
  </div>
)
