import { createFileRoute } from "@tanstack/react-router"
import { DeferredStart } from "@/lezioni/capitolo3/useDeferred/start"
import { DeferredResult } from "@/lezioni/capitolo3/useDeferred/result"
import {
  LessonTabContentTitle,
  LessonTabContentText,
  LessonTabContent,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute(`/_capitoli/capitolo3/useDeferredValue/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useDeferredValue</h1>
      <LessonTabIntro>
        <LessonTabContent value="start">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p>
              useDeferredValue è un React Hook che ti consente di
              rinviare/ritardare l'aggiornamento di una parte dell'UI.
            </p>
          </LessonTabContentText>
          <Button asChild variant="success">
            <a
              href="https://react.dev/reference/react/useDeferred"
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
        risultato={<DeferredResult />}
        start={<DeferredStart />}
      />
    </div>
  ),
})
