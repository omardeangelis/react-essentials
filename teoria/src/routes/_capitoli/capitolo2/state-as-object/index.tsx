import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { StateAsObjectInizio } from "@/lezioni/capitolo2/state-as-object/start"
import { StateAsObjectResult } from "@/lezioni/capitolo2/state-as-object/result"

export const Route = createFileRoute(`/_capitoli/capitolo2/state-as-object/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">State as Object</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                Uno stato in React può contenere qualsiasi tipo di dato,
                compresi gli oggetti. Bisogna prestare però molta attenzione a
                mutare gli direttamente gli oggetti quando descrivono uno stato
              </p>
              <p>
                Nonostante in Javascript gli oggetti siano mutabili, quando
                lavoriamo con React, dobbiamo trattarli come degli oggetti
                immutabili
              </p>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<StateAsObjectResult />}
        start={<StateAsObjectInizio />}
      />
    </div>
  ),
})
