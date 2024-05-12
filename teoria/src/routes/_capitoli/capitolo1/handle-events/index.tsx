import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { HandleEventsResults } from "@/lezioni/capitolo1/handle-events/risultato"
import { HandleEventsInizio } from "@/lezioni/capitolo1/handle-events/start"

export const Route = createFileRoute(`/_capitoli/capitolo1/handle-events/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-3xl">Gestione degli eventi</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p className="mt-4">
              Gli eventi in React sono simili a quelli in HTML, ma con alcune
              differenze chiave:
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>
                Gli eventi in React sono denominati in camelCase invece che in
                lowercase.
              </li>
              <li>
                Con JSX si passa una funzione come gestore dell'evento invece di
                una stringa.
              </li>
            </ul>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>

      <LessonTabs
        className="mt-8"
        risultato={<HandleEventsResults />}
        start={<HandleEventsInizio />}
      />
    </div>
  ),
})
