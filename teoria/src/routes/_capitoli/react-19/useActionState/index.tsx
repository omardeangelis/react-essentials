import { createFileRoute } from "@tanstack/react-router"
import { UseActionStateStart } from "@/lezioni/react-19/useActionState/start"
import { UseActionStateResult } from "@/lezioni/react-19/useActionState/result"
import {
  LessonTabContentTitle,
  LessonTabContentText,
  LessonTabContent,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Code } from "@/components/ui/code"

export const Route = createFileRoute(`/_capitoli/react-19/useActionState/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">useActionState</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <p>
              useActionState è un hook che ci permette di creare funzioni che
              possono essere usate come action
            </p>
            <p>
              <Code>useActionState(action, initialState, permalink?))</Code>
            </p>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<UseActionStateResult />}
        start={<UseActionStateStart />}
      />
    </div>
  ),
})
