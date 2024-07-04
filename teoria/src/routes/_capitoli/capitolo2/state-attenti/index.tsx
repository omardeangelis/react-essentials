import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { StateVirgolaAttentiRisultato } from "@/lezioni/capitolo2/state-attenti/result"
import { Button } from "@/components/ui/button"
import { StateVirgolaAttentiInizio } from "@/lezioni/capitolo2/state-attenti/start"

export const Route = createFileRoute(`/_capitoli/capitolo2/state-attenti/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">State attenti</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                Ora una bella carrellata di esempi di come non usare e/o come
                non funziona assolutamente uno state
              </p>
              <Button asChild variant="success">
                <a
                  href="https://react.dev/learn/queueing-a-series-of-state-updates"
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
        risultato={<StateVirgolaAttentiRisultato />}
        start={<StateVirgolaAttentiInizio />}
      />
    </div>
  ),
})
