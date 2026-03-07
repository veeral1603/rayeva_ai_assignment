import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function LinkButton({ children, href }: Props) {
  return (
    <Link
      href={href}
      className="rounded-md border-violet-500 border-2 px-4 py-2 text-sm font-medium text-foreground bg-violet-200 hover:bg-violet-300 dark:bg-violet-700 dark:hover:bg-violet-600 dark:text-violet-200 dark:hover:text-violet-100 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
