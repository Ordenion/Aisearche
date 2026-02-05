import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

export function FloatingCard({ children, className, delay = 0, reverse = false }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "sticker-card p-4",
        reverse ? "animate-float-reverse rotate-2" : "animate-float -rotate-1",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
