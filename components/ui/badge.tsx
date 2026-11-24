import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        // active filter — brand fill
        default:
          "border-brand bg-brand text-white hover:bg-brand-hover hover:border-brand-hover",
        // inactive filter — outlined
        outline:
          "border-rule-strong bg-transparent text-ink-soft hover:border-brand hover:text-ink",
        // subtle tag — tint background
        secondary:
          "border-transparent bg-tint text-ink hover:bg-gold-muted",
        // ghost — no border, hover reveals background
        ghost:
          "border-transparent text-ink-soft hover:bg-tint hover:text-ink",
        destructive:
          "border-transparent bg-red-900/30 text-red-400 hover:bg-red-900/50",
        link: "border-transparent text-ink underline-offset-4 hover:underline p-0",
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
