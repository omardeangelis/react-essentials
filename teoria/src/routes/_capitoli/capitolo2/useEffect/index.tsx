import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { UseEffectStart } from "@/lezioni/capitolo2/useEffect/start"
import { UseEffectResult } from "@/lezioni/capitolo2/useEffect/result"
import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

export const Route = createFileRoute(`/_capitoli/capitolo2/useEffect/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useEffect</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                <Code>useEffect</Code> è un hook che ci permette di
                syncronizzare il nostro componente con un sistema esterno
                rispetto al nostro componente.
              </p>
              <p>
                useEffect ha la seguente sintassi:
                <Code>useEffect(effect, [dependencies])</Code>
              </p>
              <Button asChild>
                <a href="https://react.dev/reference/react/useEffect">
                  Doc Ufficiale
                </a>
              </Button>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        start={<UseEffectStart />}
        risultato={<UseEffectResult />}
      />
    </div>
  ),
})
