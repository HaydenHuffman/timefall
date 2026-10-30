import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-xs font-bold uppercase tracking-[.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-[var(--cyan)] !text-[#17383b] hover:bg-[#86afb4] active:bg-[#83aaaf]", outline: "border border-white/20 bg-white/[.03] text-white hover:border-[var(--cyan)] hover:text-[var(--cyan)]", ghost: "text-white/70 hover:text-[var(--cyan)]" }, size: { default: "h-12 px-6", sm: "h-10 px-4", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => { const Comp = asChild ? Slot : "button"; return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />; });
Button.displayName = "Button";
