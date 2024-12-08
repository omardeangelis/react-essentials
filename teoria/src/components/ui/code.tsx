import { ComponentProps } from "react";
import { cn } from "@/lib/utils"

type CodeProps = ComponentProps<"code">

export const Code = (
  {
    ref,
    children,
    className,
    ...props
  }: CodeProps & {
    ref: React.RefObject<HTMLElement>;
  }
) => (<code
  ref={ref}
  className={cn(`bg-violet-800 p-0.5 rounded-sm`, className)}
  {...props}
>
  {children}
</code>)

Code.displayName = `Code`
