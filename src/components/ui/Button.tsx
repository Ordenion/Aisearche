import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 disabled:bg-[hsl(var(--glaze-mint))] disabled:text-[hsl(var(--ink-secondary))] disabled:border-[hsl(var(--ink-secondary))] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background border-2 border-foreground shadow-button hover:-translate-y-0.5 active:translate-y-0.5 after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-[hsl(var(--glow-green))] after:to-[hsl(var(--glow-purple))] after:opacity-0 hover:after:opacity-100 after:transition-opacity",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-foreground bg-background text-foreground hover:bg-[hsl(var(--glaze-mint))]",
        secondary: "border-2 border-foreground bg-[hsl(var(--glaze-mint))] text-foreground hover:bg-[hsl(var(--glaze-lime))]",
        ghost: "text-foreground hover:bg-[hsl(var(--glaze-mint))]",
        link: "text-foreground underline-offset-4 decoration-[hsl(var(--glow-green))] hover:underline",
        glow:
          "bg-foreground text-background border-2 border-foreground shadow-button hover:-translate-y-0.5 active:translate-y-0.5 after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-[hsl(var(--glow-green))] after:to-[hsl(var(--glow-purple))] after:opacity-0 hover:after:opacity-100 after:transition-opacity",
        "glow-outline": "border-2 border-foreground bg-[hsl(var(--glaze-mint))] text-foreground hover:bg-[hsl(var(--glaze-lime))]",
        glass: "bg-card border-2 border-foreground text-foreground",
        hero:
          "bg-foreground text-background border-2 border-foreground shadow-button hover:-translate-y-0.5 active:translate-y-0.5 after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-[hsl(var(--glow-green))] after:to-[hsl(var(--glow-purple))] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-xl px-10 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
