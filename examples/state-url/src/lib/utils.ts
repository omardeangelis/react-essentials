import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Post = {
  id: number
  title: string
  body: string
}

const roles = ["admin", "user", "guest"] as const

export const getRole = (index: number) => roles[index % roles.length]
