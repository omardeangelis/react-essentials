import { createFileRoute } from "@tanstack/react-router"
import { UseTransitionResult } from "@/lezioni/capitolo3/useTransition/result"
import { UseTransitionStart } from "@/lezioni/capitolo3/useTransition/start"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Code } from "@/components/ui/code"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute(`/_capitoli/capitolo3/useTransition/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useTransition</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p>
              <Code>useTransition</Code> è un hook che ci permette di
              renderizzare una parte della UI in background mentre attendiamo
              una risposta asincrona.
            </p>
            <p>
              Possiamo usarla solo quando abbiamo accesso al{` `}
              <Code>setState</Code> di uno state
            </p>
            <Button asChild variant="success">
              <a
                href="https://react.dev/reference/react/useTransition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leggi la Doc
              </a>
            </Button>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<UseTransitionResult />}
        start={<UseTransitionStart />}
      />
    </div>
  ),
})
