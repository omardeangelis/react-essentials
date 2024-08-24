import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Button } from "@/components/ui/button"

import { UserReducerRisultato } from "@/lezioni/capitolo2/reducer/result"
import { UserReducerInizio } from "@/lezioni/capitolo2/reducer/start"

export const Route = createFileRoute(`/_capitoli/capitolo2/reducer/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">Reducer</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                I reducer sono funzioni che accettano lo stato attuale e
                un'azione e restituiscono un nuovo stato. Sono un concetto
                chiave per comprendere framework di State Managment come Redux.
              </p>
              <p>
                L'utilizzo degli State Managers era necessario per gestire gli
                stati complessi di applicazioni di grandi dimensioni. Con
                l'introduzione degli Hooks, React ha reso possibile gestire lo
                stato in modo efficiente anche senza l'utilizzo di librerie
                esterne.
              </p>
              <Button asChild variant="success">
                <a
                  href="https://react.dev/learn/extracting-state-logic-into-a-reducer"
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
        risultato={<UserReducerRisultato />}
        start={<UserReducerInizio />}
      />
    </div>
  ),
})
