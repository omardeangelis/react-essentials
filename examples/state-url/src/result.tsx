import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useQuery } from "@tanstack/react-query"
import { useCallback, useDeferredValue, useMemo } from "react"
import { getRole, Post } from "./lib/utils"
import { Link, useSearchParams } from "react-router"
import { Badge } from "./components/ui/badge"
import { LoaderIcon } from "lucide-react"

// 1. Update search params when the value changes
const useUpdateSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const deferredSearch = useDeferredValue(searchParams.get("title") ?? "")
  // useEffect(() => {
  //   setSearchParams({ title: value })
  // }, [value, setSearchParams])

  const hendleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const search = e.target.value
      if (search) {
        setSearchParams({ title: search })
      } else {
        setSearchParams({})
      }
    },
    [setSearchParams]
  )

  return useMemo(
    () => ({
      search: deferredSearch,
      hendleInputChange,
    }),
    [deferredSearch, hendleInputChange]
  )
}

function Result() {
  // 2. Read search params
  // const [searchParams] = useSearchParams()
  const { search, hendleInputChange } = useUpdateSearchParams()
  // const searchDeferred = useDeferredValue(search)

  // 3. Update search params
  // useUpdateSearchParams(searchDeferred)

  // 4. Switch from suspense to query
  const { data, isPlaceholderData } = useQuery<Post[]>({
    queryKey: [`/posts/?title_like=${search}`, "result"],
    placeholderData: (prevData) => prevData,
  })
  return (
    <div className="max-w-3xl mx-auto pt-10">
      <h1>State URL Result</h1>
      <div className="flex justify-between items-end gap-2 mt-10">
        <div className="flex items-center gap-2 w-full">
          <Input
            value={search}
            onChange={hendleInputChange}
            placeholder="Search"
            className="max-w-xs w-full"
          />
          {isPlaceholderData && (
            <LoaderIcon className="animate-spin text-muted-foreground" />
          )}
        </div>
        <Link className="flex-shrink-0" to="/">
          Starting page &rarr;
        </Link>
      </div>
      <Table className="border mt-10">
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((post, index) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium text-left">{post.id}</TableCell>
              <TableCell className="text-left font-medium">
                {post.title}
              </TableCell>
              <TableCell className="text-left">
                <Badge variant={getRole(index)}>{getRole(index)}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Result
