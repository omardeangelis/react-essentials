import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { RisultatoConditionalRendering } from "@/lezioni/capitolo1/conditional-rendering/risultato"
import { InizioConditionalRendering } from "@/lezioni/capitolo1/conditional-rendering/start"

export const Route = createFileRoute(
  `/_capitoli/capitolo1/conditional-rendering/`
)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">Conditional rendering</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                Il conditional rendering è una tecnica di rendering che ti
                permette di mostrare o nascondere componenti in base a
                determinate condizioni.
              </p>
              <p>
                Puoi utilizzare variabili, espressioni e operatori per decidere
                quali componenti mostrare.
              </p>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        start={<InizioConditionalRendering />}
        risultato={<RisultatoConditionalRendering />}
      />
    </div>
  ),
})
