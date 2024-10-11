import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Button } from "@/components/ui/button"
import { ContextStart } from "@/lezioni/capitolo3/useContext/start"
import { ContextResult } from "@/lezioni/capitolo3/useContext/result"

export const Route = createFileRoute(`/_capitoli/capitolo3/useContext/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useContext</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p>
              Un Context permette ad un componente padre di condividere le
              proprie props con tutti i componenti figli.
            </p>
            <p>
              useContext è un hook che ci permette di accedere alle props
              provenienti da un Context e di sottoscriverci a eventuali
              aggiornamenti.
            </p>
          </LessonTabContentText>
          <Button asChild variant="success">
            <a
              href="https://react.dev/reference/react/useContext"
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
        risultato={<ContextResult />}
        start={<ContextStart />}
      />
    </div>
  ),
})
