import { createFileRoute } from "@tanstack/react-router"
import { LessonTabs } from "@/components/layout/LessonTabs"
import { JSinJSXRisultato } from "@/lezioni/capitolo1/js-in-jsx/risultato"
import { JSinJSXInizio } from "@/lezioni/capitolo1/js-in-jsx/start"

export const Route = createFileRoute(`/_capitoli/capitolo1/js-in-jsx/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl">JS in JSX</h1>
      <p className="mt-4 text-neutral-400">
        In JSX puoi scrivere del codice JavaScript, basta metterlo tra parentesi
        graffe.
      </p>
      <LessonTabs
        className="mt-8"
        start={<JSinJSXInizio />}
        risultato={<JSinJSXRisultato />}
      />
    </div>
  ),
})
