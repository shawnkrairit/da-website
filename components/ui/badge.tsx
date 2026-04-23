import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        // active filter — gold fill
        default:
          "border-gold bg-gold text-forest-deep hover:bg-gold-light hover:border-gold-light",
        // inactive filter — outlined gold
        outline:
          "border-white/8 bg-transparent text-text-secondary hover:border-gold hover:text-gold",
        // subtle tag — muted gold tint background
        secondary:
          "border-transparent bg-gold-muted text-gold hover:bg-gold/20",
        // ghost — no border, hover reveals background
        ghost:
          "border-transparent text-text-secondary hover:bg-gold-muted hover:text-gold",
        destructive:
          "border-transparent bg-red-900/30 text-red-400 hover:bg-red-900/50",
        link: "border-transparent text-gold underline-offset-4 hover:underline p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
