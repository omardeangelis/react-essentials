import { createContext, useContext, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TaskApp } from "./advanced"
import { TaskProvider } from "./advanced/TaskContext"

const ThemeContext = createContext<`light` | `dark`>(`light`)

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
  <ThemeContext.Provider value="light">
    <Item />
    <ThemeContext.Provider value="dark">
      <Item />
    </ThemeContext.Provider>
  </ThemeContext.Provider>
)

const ThemeDynamicContext = createContext<{
  theme: `light` | `dark`
  setTheme: (themeValue: `light` | `dark`) => void
}>({
  theme: `light`,
  setTheme: () => {},
})

const DynamicProvider = ({
  children,
  initialTheme = `light`,
}: {
  children: React.ReactNode
  initialTheme?: `light` | `dark`
}) => {
  const [theme, setTheme] = useState<`light` | `dark`>(initialTheme)
  const ctx = useMemo(() => ({ theme, setTheme }), [theme])
  return (
    <ThemeDynamicContext.Provider value={ctx}>
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
  <DynamicProvider initialTheme="light">
    <DynamicItem />
    <DynamicProvider initialTheme="dark">
      <DynamicItem />
    </DynamicProvider>
  </DynamicProvider>
)

export const ContextResult = () => (
  <>
    <BasicContext />
    <DynamicContext />
    <hr className="my-4" />
    <TaskProvider>
      <TaskApp />
    </TaskProvider>
  </>
)
