import { useEffect, useState } from "react"
import { fetchUsers, fetchPosts } from "../api/data"
import { Skeleton } from "@/components/ui/skeleton"

const Posts = () => {
  const [data, setData] = useState<{ id: number; title: string }[] | null>(null)
  useEffect(() => {
    fetchPosts().then(setData)
  }, [])
  if (!data) return <Skeleton className="h-10 w-full" />
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

const Users = () => {
  const [data, setData] = useState<{ id: number; name: string }[] | null>(null)
  useEffect(() => {
    fetchUsers().then(setData)
  }, [])
  if (!data) return <Skeleton className="h-10 w-full" />
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

export const SuspenseStart = () => (
  <div className="flex flex-col gap-4">
    <Users />
    <Posts />
  </div>
)
