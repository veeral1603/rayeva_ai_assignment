"use client";
import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  jsonData: JSON | null;
}

export default function JSONOutputContainer({ jsonData }: Props) {
  if (!jsonData) {
    return (
      <div className="flex items-center justify-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">
          Your results will appear here
        </h3>
      </div>
    );
  }

  return (
    <SyntaxHighlighter
      language="json"
      style={vscDarkPlus}
      className="rounded-lg  overflow-auto"
    >
      {JSON.stringify(jsonData, null, 2)}
    </SyntaxHighlighter>
  );
}
