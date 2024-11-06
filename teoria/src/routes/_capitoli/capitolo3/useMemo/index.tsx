import { createFileRoute } from "@tanstack/react-router"
import { UseMemoStart } from "@/lezioni/capitolo3/useMemo/start"
import { UseMemoResult } from "@/lezioni/capitolo3/useMemo/result"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Code } from "@/components/ui/code"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute(`/_capitoli/capitolo3/useMemo/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useMemo</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p className="mb-4">
              useMemo è un hook che permette di cachare il risultato di un
              "calcolo" attraverso i re-renders
            </p>
            <Code>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])`}</Code>
            <Button asChild variant="success" className="mt-4">
              <a
                href="https://react.dev/reference/react/useMemo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leggi la Doc
              </a>
            </Button>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        start={<UseMemoStart />}
        risultato={<UseMemoResult />}
      />
    </div>
  ),
})
