import { createFileRoute } from "@tanstack/react-router"
import { PrimoComponenteRisultato } from "@/lezioni/capitolo1/primo-componente/risultato"
import { LessonTabs } from "@/components/layout/LessonTabs"
import { PrimoComponenteInizio } from "@/lezioni/capitolo1/primo-componente/start"

export const Route = createFileRoute(`/_capitoli/capitolo1/primo-componente/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl">Scriviamo il nostro primo componente</h1>
      <LessonTabs
        className="mt-8"
        risultato={<PrimoComponenteRisultato />}
        start={<PrimoComponenteInizio />}
      />
    </div>
  ),
})
