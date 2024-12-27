import { createFileRoute } from "@tanstack/react-router"
import { UseOptimisticStart } from "@/lezioni/react-19/useOptimistic/start"
import { UseOptimisticResult } from "@/lezioni/react-19/useOptimistic/result"
import {
  LessonTabContentTitle,
  LessonTabContentText,
  LessonTabContent,
  LessonTabIntro,
  LessonTabs,
} from "@/components/layout/LessonTabs"

const RouteComponent = () => (
  <div className="lesson-container">
    <h1 className="text-4xl font-bold">useOptimistic</h1>
    <LessonTabIntro>
      <LessonTabContent value="content">
        <LessonTabContentTitle />
        <LessonTabContentText>
          <p>
            useOptimistic è un hook che ci permette di creare funzioni che
            possono essere usate come action
          </p>
        </LessonTabContentText>
      </LessonTabContent>
    </LessonTabIntro>
    <LessonTabs
      className="mt-8"
      risultato={<UseOptimisticResult />}
      start={<UseOptimisticStart />}
    />
  </div>
)
export const Route = createFileRoute(`/_capitoli/react-19/useOptimistic/`)({
  component: RouteComponent,
})
