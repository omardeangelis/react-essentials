import { Outlet, createFileRoute } from "@tanstack/react-router"
import { ChapterLayout } from "@/components/layout/ChapterLayout"

export const Route = createFileRoute(`/_capitoli`)({
  component: () => (
    <ChapterLayout>
      <Outlet />
    </ChapterLayout>
  ),
})
