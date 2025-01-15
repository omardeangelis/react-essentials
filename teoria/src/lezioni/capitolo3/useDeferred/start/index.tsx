import { Suspense, use, useState } from "react"
import { Input } from "@/components/ui/input"
import { fetchData } from "../api"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const useSearch = (search: string) => {
  const data = use(fetchData(`/search?q=${search}`))
  return { data }
}

const SearchItems = ({ search }: { search: string }) => {
  const { data } = useSearch(search)
  if (search === ``) return <div>Search for a Beatles album</div>
  if (data.length === 0) return <div>No results</div>
  return (
    <ul className="space-y-4">
      {data.map((item) => (
        <li key={item.id}>
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

const React19SearchItems = () => <div>React 19</div>

export const DeferredStart = () => {
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
            <React19SearchItems />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}
