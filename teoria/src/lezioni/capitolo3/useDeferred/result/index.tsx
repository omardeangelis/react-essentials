import { Suspense, use, useDeferredValue, useState } from "react"
import { Input } from "@/components/ui/input"
import { fetchData } from "../api"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const useSearch = (search: string) => {
  const searchDeferred = useDeferredValue(search)
  const isPending = search !== searchDeferred
  const data = use(fetchData(`/search?q=${searchDeferred}`))
  return { data, isPending }
}

const SearchItems = ({ search }: { search: string }) => {
  const { data, isPending } = useSearch(search)
  if (search === ``) return <div>Search for a Beatles album</div>
  if (data.length === 0) return <div>No results</div>
  return (
    <ul className="space-y-4">
      {data.map((item) => (
        <li
          key={item.id}
          className={cn({
            [`opacity-50`]: isPending,
          })}
        >
          <Card>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.year}</CardDescription>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  )
}

const React19SearchItems = ({ search }: { search: string }) => {
  const searchDeferred = useDeferredValue(search)
  const isPending = search !== searchDeferred
  if (search === ``) return <div>Search Album</div>
  const data = use(fetchData(`/search?q=${searchDeferred}`))
  if (data.length === 0) return <div>No results</div>
  return (
    <ul className="space-y-4">
      {data.map((item) => (
        <li
          key={item.id}
          className={cn({
            [`opacity-50`]: isPending,
          })}
        >
          <Card>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.year}</CardDescription>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  )
}

export const DeferredResult = () => {
  const [search, setSearch] = useState(``)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Tabs defaultValue="react18">
        <TabsList>
          <TabsTrigger value="react18">React 18</TabsTrigger>
          <TabsTrigger value="react19">React 19</TabsTrigger>
        </TabsList>
        <Input value={search} onChange={handleSearch} className="my-4 w-full" />

        <TabsContent value="react18">
          <Suspense fallback={<Skeleton className="h-48 w-full" />}>
            <SearchItems search={search} />
          </Suspense>
        </TabsContent>
        <TabsContent value="react19">
          <Suspense fallback={<Skeleton className="h-48 w-full" />}>
            <React19SearchItems search={search} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}
