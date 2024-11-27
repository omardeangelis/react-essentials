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
import { getRole, Post } from "./lib/utils"
import { Link } from "react-router"

function Start() {
  const [search, setSearch] = useState("")
  const searchDeferred = useDeferredValue(search)
  const { data } = useSuspenseQuery<Post[]>({
    queryKey: [`/posts/?title_like=${searchDeferred}`, "start"],
  })
  return (
    <div className="max-w-3xl mx-auto pt-10">
      <h1>State URL</h1>
      <div className="flex justify-between items-end gap-2">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="mt-10 max-w-xs"
        />
        <Link to="/result">See solution &rarr;</Link>
      </div>
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
            {data.map((person, index) => (
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

export default Start
