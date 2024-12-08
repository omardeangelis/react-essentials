import * as React from "react"

import { cn } from "@/lib/utils"

const Card = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    ref: React.RefObject<HTMLDivElement>;
  }
) => (<div
  ref={ref}
  className={cn(
    `rounded-lg border bg-card text-card-foreground shadow-sm`,
    className
  )}
  {...props}
/>)
Card.displayName = `Card`

const CardHeader = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    ref: React.RefObject<HTMLDivElement>;
  }
) => (<div
  ref={ref}
  className={cn(`flex flex-col space-y-1.5 p-6`, className)}
  {...props}
/>)
CardHeader.displayName = `CardHeader`

const CardTitle = (
  {
    ref,
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement> & {
    ref: React.RefObject<HTMLParagraphElement>;
  }
) => (<h3
  ref={ref}
  className={cn(
    `text-2xl font-semibold leading-none tracking-tight`,
    className
  )}
  {...props}
>
  {children}
</h3>)
CardTitle.displayName = `CardTitle`

const CardDescription = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement> & {
    ref: React.RefObject<HTMLParagraphElement>;
  }
) => (<p
  ref={ref}
  className={cn(`text-sm text-muted-foreground`, className)}
  {...props}
/>)
CardDescription.displayName = `CardDescription`

const CardContent = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    ref: React.RefObject<HTMLDivElement>;
  }
) => (<div ref={ref} className={cn(`p-6 pt-0`, className)} {...props} />)
CardContent.displayName = `CardContent`

const CardFooter = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    ref: React.RefObject<HTMLDivElement>;
  }
) => (<div
  ref={ref}
  className={cn(`flex items-center p-6 pt-0`, className)}
  {...props}
/>)
CardFooter.displayName = `CardFooter`

const ExampleCard = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    ref: React.RefObject<HTMLDivElement>;
  }
) => (<Card ref={ref} className={cn(`w-full`, className)} {...props}>
  <CardContent className="flex justify-between items-center py-3">
    {props.children}
  </CardContent>
</Card>)

ExampleCard.displayName = `ExampleCard`

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  ExampleCard,
}
