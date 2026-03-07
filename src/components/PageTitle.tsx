import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <div className="w-full text-left max-w-lg mb-8">
      <h2 className="text-foreground text-4xl font-bold">{children}</h2>
    </div>
  );
}
