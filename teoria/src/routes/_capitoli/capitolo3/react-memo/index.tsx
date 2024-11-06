import { createFileRoute } from "@tanstack/react-router"
import { ReactMemoStart } from "@/lezioni/capitolo3/react-memo/start"
import { ReactMemoResult } from "@/lezioni/capitolo3/react-memo/result"
import {
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabContent,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Code } from "@/components/ui/code"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute(`/_capitoli/capitolo3/react-memo/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">React.memo</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText className="space-y-4">
            <p>
              <Code>React.memo</Code> ci permette di evitare di eseguire un
              re-render se le props di un componente non cambiano.
            </p>
            <p>
              La sua sintassi è <Code>memo(Component, arePropsEqual?)</Code>
              {` `}
              dove <Code>arePropsEqual</Code> è una funzione (opzionale) che
              accetta due parametri e dovrebbe ritornare <Code>true</Code> se le
              props sono uguali.
            </p>
            <ol className="list-decimal space-y-2 list-inside">
              <li>
                <Code>prevProps</Code>
              </li>
              <li>
                <Code>nextProps</Code>
              </li>
            </ol>
            <p>
              Di solito non è necessario fornire una funzione{` `}
              <Code>arePropsEqual</Code> le quali vengono confrontate usando
              {` `}
              <Code>Object.is</Code>
            </p>
          </LessonTabContentText>
          <Button asChild variant="success">
            <a
              href="https://react.dev/reference/react/memo"
              target="_blank"
              rel="noreferrer"
            >
              Documentazione
            </a>
          </Button>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<ReactMemoResult />}
        start={<ReactMemoStart />}
      />
    </div>
  ),
})
