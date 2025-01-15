import { lazy, Suspense, use } from "react"
import { fetchPosts, fetchUsers } from "../api/data"
import { Skeleton } from "@/components/ui/skeleton"

const LazyLoaded = lazy(() =>
  import(`../components/Lazy`).then(async (module) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    return {
      default: module.Lazy,
    }
  })
)

const Posts = () => {
  const data = use(fetchPosts())
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

const Users = () => {
  const data = use(fetchUsers())
  return (
    <div>
      {data.map((user) => (
        <div key={user.id} className="text-2x">
          {user.name}
        </div>
      ))}
    </div>
  )
}

export const SuspenseResult = () => (
  <div className="flex flex-col gap-4">
    <Suspense fallback={<Skeleton className="h-10 w-full" />}>
      <LazyLoaded />
    </Suspense>
    <Suspense
      fallback={
        <div className="flex flex-col gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-16 w-full" />
        </div>
      }
    >
      <Users />
      <div className="mt-4">
        <Suspense fallback={<Skeleton className="h-16 w-full" />}>
          <Posts />
        </Suspense>
      </div>
    </Suspense>
  </div>
)
