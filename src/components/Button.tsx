import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ size = "lg", children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
    //PY-3 = padding vertical |
    //PX-3 = padding horizontal -
    //rounded  = arredonding to border
      className={clsx(" focus:ring-2 ring-green-900 transition-colors bg-green-500 hover:bg-green-200 text-black hover:text-gray-800 text-sm font-semibold font-sans py-3 px-3 rounded-lg h-auto", {
        "w-1/3": size === "sm",
        "w-3/6": size === "md",
        "w-full": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
