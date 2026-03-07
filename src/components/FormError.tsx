import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function FormError({ children }: Props) {
  return <p className="text-red-500 text-xs">{children}</p>;
}
