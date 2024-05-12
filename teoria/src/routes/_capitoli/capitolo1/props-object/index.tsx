import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { RisultatoComponentWithProps } from "@/lezioni/capitolo1/props-object/risultato"
import { InizioComponentWithProps } from "@/lezioni/capitolo1/props-object/start"

export const Route = createFileRoute(`/_capitoli/capitolo1/props-object/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">Props Object</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p className="mt-4">
              Le props sono gli argomenti che passi ai componenti React. Sono
              immutabili e vengono passate da un componente padre a un
              componente figlio.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside max-w-xl">
              <li>
                children è una prop speciale che contiene tutto ciò che è stato
                passato tra i tag di apertura e chiusura di un componente.
              </li>
              <li>
                key è una prop speciale che React utilizza per identificare in
                modo univoco i componenti durante la conciliazione.
              </li>
            </ul>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<RisultatoComponentWithProps />}
        start={<InizioComponentWithProps />}
      />
    </div>
  ),
})
