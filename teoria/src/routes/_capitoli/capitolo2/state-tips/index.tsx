import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabIntro,
  LessonTabContent,
  LessonTabContentTitle,
  LessonTabContentText,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Button } from "@/components/ui/button"
import { StateTipsRisultato } from "@/lezioni/capitolo2/state-tips/result"
import { StateTipsInizio } from "@/lezioni/capitolo2/state-tips/start"

export const Route = createFileRoute(`/_capitoli/capitolo2/state-tips/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">State attenti</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                Questo capitolo contiene una serie di consigli e best practices
                per gestire lo stato in React. La gestione dello stato impatta
                soprattuto sulle performance dell'applicazione, quindi è
                importante avere idea di che cosa si stia facendp.
              </p>
              <Button asChild variant="success">
                <a
                  href="https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leggi la Doc
                </a>
              </Button>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<StateTipsRisultato />}
        start={<StateTipsInizio />}
      />
    </div>
  ),
})
