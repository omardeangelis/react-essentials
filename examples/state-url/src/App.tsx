import "./App.css"
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Suspense, useDeferredValue, useState } from "react"
import { axiosInstance } from "@/client"

type Post = {
  id: number
  title: string
  body: string
}

const roles = ["admin", "user", "guest"] as const

const getRole = (index: number) => roles[index % roles.length]

function App() {
  const [search, setSearch] = useState("")
  const searchDeferred = useDeferredValue(search)
  const { data } = useSuspenseQuery({
    queryKey: ["people", searchDeferred],
    queryFn: async () =>
      await axiosInstance.get<Post[]>(`/posts/?title_like=${searchDeferred}`),
  })
  return (
    <div className="max-w-3xl mx-auto">
      <h1>Hello World</h1>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="mt-10 max-w-xs"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Table className="border mt-10">
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((person, index) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium text-left">
                  {person.id}
                </TableCell>
                <TableCell className="text-left">{person.title}</TableCell>
                <TableCell className="text-left">{getRole(index)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Suspense>
    </div>
  )
}

export default App
