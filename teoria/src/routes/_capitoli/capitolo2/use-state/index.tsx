import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { InizioUpdatingUI } from "@/lezioni/capitolo2/use-state/start"
import { RisultatoUpdatingUI } from "@/lezioni/capitolo2/use-state/result"

export const Route = createFileRoute(`/_capitoli/capitolo2/use-state/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">Aggiornare la UI</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                Arrivati a questo punto non sarebbe male dare un pizzico di
                reattività alla nostra applicazione. Ad esempio "ricordandosi"
                delle informazioni e mostrarle all'utente anche quando cambiano
                valore.
              </p>
              <p>
                Introduciamo quindi il concetto di{` `}
                <code className="bg-blue-800 p-0.5 rounded-sm">useState</code>
                {` `}
                che ci permette di tenere traccia di un valore e di aggiornare
                la UI quando questo cambia.
              </p>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        start={<InizioUpdatingUI />}
        risultato={<RisultatoUpdatingUI />}
      />
    </div>
  ),
})
