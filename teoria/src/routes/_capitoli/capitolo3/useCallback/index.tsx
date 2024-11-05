import { createFileRoute } from "@tanstack/react-router"
import { UseCallbackStart } from "@/lezioni/capitolo3/useCallback/start"
import { UseCallbackResult } from "@/lezioni/capitolo3/useCallback/result"
import {
  LessonTabContentTitle,
  LessonTabContentText,
  LessonTabContent,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Code } from "@/components/ui/code"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute(`/_capitoli/capitolo3/useCallback/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useCallback</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p>
              useCallback è un hook che ci permette di <Code>cachere</Code>
              {` `}
              attraverso i re-renders.
            </p>
            <p>
              React ritornerà la stessa funzione se le dipendenze non sono
              cambiate dal render precedente.
            </p>
          </LessonTabContentText>
          <Button asChild variant="success">
            <a
              href="https://react.dev/reference/react/useCallback"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leggi la Doc
            </a>
          </Button>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<UseCallbackResult />}
        start={<UseCallbackStart />}
      />
    </div>
  ),
})
