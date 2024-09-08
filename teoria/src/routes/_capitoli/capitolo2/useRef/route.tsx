import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { UseRefStart } from "@/lezioni/capitolo2/useRef/start"
import { UseRefResult } from "@/lezioni/capitolo2/useRef/result"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute(`/_capitoli/capitolo2/useRef`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useRef</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                useRef è un hook che permette di riferirsi ad un valore ed
                interagire con esso senza dover ricreare il componente.
              </p>
              <p>
                useRef è un hook che ci permette di creare un riferimento a un
                elemento del DOM.
              </p>
              <Button asChild>
                <a href="https://react.dev/reference/react/useRef">
                  Docs Ufficiale
                </a>
              </Button>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        start={<UseRefStart />}
        risultato={<UseRefResult />}
      />
    </div>
  ),
})
