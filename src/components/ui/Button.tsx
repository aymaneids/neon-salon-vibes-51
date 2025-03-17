
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = "rounded-full font-medium transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    primary: "bg-salon-pink text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
    outlined: "border-2 border-salon-pink text-salon-pink hover:bg-salon-pink hover:text-white",
    text: "text-salon-pink hover:bg-salon-pink hover:bg-opacity-10",
  };

  const sizeClasses = {
    sm: "text-sm px-4 py-1.5",
    md: "px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
