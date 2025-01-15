import { createFileRoute } from "@tanstack/react-router"
import { SuspenseStart } from "@/lezioni/capitolo3/suspense/start"
import { SuspenseResult } from "@/lezioni/capitolo3/suspense/result"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

export const Route = createFileRoute(`/_capitoli/capitolo3/suspense/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">Suspense</h1>
      <LessonTabIntro>
        <LessonTabContent value="start">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p>
              <Code>{`<Suspense/>`}</Code> ti permette di mostrare una fallback
              finché il componente figlio non è pronto o non ha eventualmente
              finito di caricare
            </p>
          </LessonTabContentText>
          <Button asChild variant="success">
            <a
              href="https://react.dev/reference/react/Suspense"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leggi la Doc
            </a>
          </Button>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<SuspenseResult />}
        start={<SuspenseStart />}
      />
    </div>
  ),
})
