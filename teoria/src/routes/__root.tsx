import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Suspense } from "react"
import { RootLayout } from "@/components/layout/RootLayout"
import { TanStackRouterDevtools } from "@/components/devtools/TanstackDevTools"

export const Route = createRootRoute({
  component: () => (
    <RootLayout>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </RootLayout>
  ),
})
