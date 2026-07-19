import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8912e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-[#0d304a] text-white hover:bg-[#123c5e]",
  outline: "border border-[#cdd9e0] bg-transparent text-[#163553]",
  ghost: "bg-transparent text-[#163553] hover:bg-[#eef3f5]",
} as const;

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10",
} as const;

export function Button({ className, variant = "default", size = "default", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={twMerge(base, variants[variant], sizes[size], className)} {...props} />;
}
