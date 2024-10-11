import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const Item = ({ theme }: { theme: `light` | `dark` }) => (
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

const BasicContext = () => (
  <>
    <Item theme="light" />
    <Item theme="dark" />
  </>
)

const ThemeToggler = ({
  theme,
  setTheme,
}: {
  theme: `light` | `dark`
  setTheme: (themeValue: `light` | `dark`) => void
}) => (
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

const DynamicItem = ({ theme }: { theme: `light` | `dark` }) => {
  const [themeState, setThemeState] = useState<`light` | `dark`>(theme)
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
        <ThemeToggler theme={themeState} setTheme={setThemeState} />
      </CardContent>
    </Card>
  )
}

const DynamicContext = () => (
  <>
    <DynamicItem theme="light" />
    <DynamicItem theme="dark" />
  </>
)

export const ContextStart = () => (
  <>
    <BasicContext />
    <DynamicContext />
  </>
)
