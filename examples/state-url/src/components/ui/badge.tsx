import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "react"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset capitalize",
  {
    variants: {
      variant: {
        default: "bg-gray-50 text-gray-900 ring-gray-900/10",
        admin: "bg-blue-100 text-blue-900 ring-blue-900/10",
        user: "bg-green-100 text-green-900 ring-green-900/10",
        guest: "bg-red-100 text-red-900 ring-red-900/10",
      },
    },
  }
)

type BadgeProps = VariantProps<typeof badgeVariants>

export function Badge({
  variant,
  className,
  ...props
}: BadgeProps & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
