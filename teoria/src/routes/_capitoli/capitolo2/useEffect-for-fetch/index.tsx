import { createFileRoute } from "@tanstack/react-router"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { UseEffectForFetchStart } from "@/lezioni/capitolo2/useEffect-for-fetch/start"
import { UseEffectForFetchResult } from "@/lezioni/capitolo2/useEffect-for-fetch/result"
import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

export const Route = createFileRoute(
  `/_capitoli/capitolo2/useEffect-for-fetch/`
)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useEffect for fetch</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                Uno dei casi d'uso più comune per <Code>useEffect</Code> è il
                fetching di dati.
              </p>
              <p>
                Ora andiamo a vedere quali sono i passaggi per effettuare un
                fetch di dati, come gestire i dati, il caricamento e i possibili
                errori.
              </p>
              <Button asChild>
                <a href="https://react.dev/reference/react/useEffect">
                  Doc Ufficiale
                </a>
              </Button>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        start={<UseEffectForFetchStart />}
        risultato={<UseEffectForFetchResult />}
      />
    </div>
  ),
})
