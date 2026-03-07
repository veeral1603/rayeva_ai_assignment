import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
}: Props) {
  return (
    <button
      className="rounded-md border-violet-500 border-2 cursor-pointer px-4 py-2 text-sm font-medium text-foreground bg-violet-200 hover:bg-violet-300 dark:bg-violet-700 dark:hover:bg-violet-600 dark:text-violet-200 dark:hover:text-violet-100 transition-colors duration-200"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
