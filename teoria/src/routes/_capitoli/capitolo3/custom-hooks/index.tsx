import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { CustomHooksResult } from "@/lezioni/capitolo3/custom-hooks/result"
import { CustomHooksStart } from "@/lezioni/capitolo3/custom-hooks/start"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute(`/_capitoli/capitolo3/custom-hooks/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">Custom Hooks</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                Fino ad ora abbiamo visto che i componenti React sono funzioni
                che accettano props e restituiscono JSX e che possiamo
                riutilizzare in più punti della nostra applicazione
              </p>
              <p>
                I custom hooks sono funzioni che ci permettono di estrarre la
                logica e di renderla riutilizzabile in più punti della nostra
                applicazione.
              </p>
              <Button asChild variant="success">
                <a
                  href="https://react.dev/learn/reusing-logic-with-custom-hooks"
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
        risultato={<CustomHooksResult />}
        start={<CustomHooksStart />}
      />
    </div>
  ),
})
