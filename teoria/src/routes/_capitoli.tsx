import { Outlet, createFileRoute } from "@tanstack/react-router"
import { ChapterLayout } from "@/components/layout/ChapterLayout"

type Search = {
  tab: string
}

export const Route = createFileRoute(`/_capitoli`)({
  validateSearch: (search: Record<string, unknown>): Search => ({
    tab: (search.tab as string) || ``,
  }),
  component: () => (
    <ChapterLayout>
      <Outlet />
    </ChapterLayout>
  ),
})
