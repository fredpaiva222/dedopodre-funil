"use client";

import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "amethyst" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function Button({
  variant = "amethyst",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "relative inline-flex items-center justify-center font-sans font-bold uppercase tracking-widest transition-all duration-200 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        {
          // Variants
          "bg-amethyst hover:bg-amethyst-light text-white shadow-lg hover:shadow-amethyst/40":
            variant === "amethyst",
          "bg-gold hover:bg-gold-light text-bg-deep shadow-lg hover:shadow-gold/40 animate-[glow-pulse_2s_ease-in-out_infinite]":
            variant === "gold",
          "border border-gold text-gold hover:bg-gold/10":
            variant === "outline",
          "text-text-secondary hover:text-text-primary":
            variant === "ghost",
          // Sizes
          "text-xs px-4 py-2": size === "sm",
          "text-sm px-6 py-4": size === "md",
          "text-base px-8 py-5": size === "lg",
          // Width
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
