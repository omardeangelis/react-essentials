import { createFileRoute } from "@tanstack/react-router"
import { React19UseResult } from "@/lezioni/react-19/use/result"
import { React19UseStart } from "@/lezioni/react-19/use/start"
import {
  LessonTabContent,
  LessonTabContentText,
  LessonTabContentTitle,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"
import { Code } from "@/components/ui/code"

export const Route = createFileRoute(`/_capitoli/react-19/use/`)({
  component: () => (
    <div className="lesson-container">
      <h1 className="text-4xl font-bold">use</h1>
      <LessonTabIntro>
        <LessonTabContent value="content">
          <LessonTabContentTitle />
          <LessonTabContentText>
            <div className="space-y-4">
              <p>
                <Code>use(resource)</Code> è un hook che permette di
                leggere/accedere al valore di una resourse come una Promise o un
                Context.
              </p>
            </div>
          </LessonTabContentText>
        </LessonTabContent>
      </LessonTabIntro>
      <LessonTabs
        className="mt-8"
        risultato={<React19UseResult />}
        start={<React19UseStart />}
      />
    </div>
  ),
})
