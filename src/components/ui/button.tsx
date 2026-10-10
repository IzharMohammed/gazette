import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[var(--navy)] px-5 py-3 text-white shadow-sm hover:bg-[var(--navy-2)]",
        gold: "bg-[var(--gold)] px-5 py-3 text-[var(--ink)] shadow-sm hover:bg-[var(--gold-light)]",
        outline: "border border-[var(--line)] bg-white px-5 py-3 text-[var(--navy)] hover:border-[var(--gold)] hover:bg-[var(--cream)]",
        ghost: "px-3 py-2 text-[var(--navy)] hover:bg-[var(--cream)]",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
