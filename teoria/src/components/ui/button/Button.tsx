import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ButtonVariants, buttonVariants } from "./buttonVariants"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean
}

export const Button = (
  {
    ref,
    className,
    variant,
    size,
    asChild = false,
    ...props
  }: ButtonProps & {
    ref: React.RefObject<HTMLButtonElement>;
  }
) => {
  const Comp = asChild ? Slot : `button`
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
}
Button.displayName = `Button`
