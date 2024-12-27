import { Link, useRouterState } from "@tanstack/react-router"
import React from "react"
import { routesMaps } from "@/lib/constants/routesMaps"
import { cn } from "@/lib/utils"

const getChapter = (pathname: string) => {
  const chapter = pathname.split(`/`)[1]
  console.log(chapter)
  if (chapter in routesMaps)
    return routesMaps[chapter as keyof typeof routesMaps]
}

export const ChapterLayout = ({ children }: { children: React.ReactNode }) => {
  const { location } = useRouterState()
  const chapter = getChapter(location.pathname)
  console.log(chapter, location.pathname)
  return (
    <div className="flex w-full">
      <div className="w-1/5  fixed top-0 left-0 h-full border">
        <div className="h-16" />
        <nav className="p-4">
          <h3>Lezioni</h3>
          <ul className="mt-8 flex flex-col">
            {chapter &&
              chapter.map((item) => (
                <Link to={item.path} key={item.path}>
                  <li
                    className={cn(
                      `p-2 hover:underline cursor-pointer`,
                      location.pathname === item.path
                        ? `text-cyan-500`
                        : undefined
                    )}
                    key={item.path}
                  >
                    {item.label}
                  </li>
                </Link>
              ))}
          </ul>
        </nav>
      </div>
      <div className="w-1/5" />
      <div className="w-4/5 ml-1/5 p-4">{children}</div>
    </div>
  )
}
