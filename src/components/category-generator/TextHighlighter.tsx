import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  text: string;
}

export default function TextHighlighter({ text }: Props) {
  return (
    <SyntaxHighlighter
      language="text"
      style={vscDarkPlus}
      wrapLines
      wrapLongLines
      customStyle={{
        maxWidth: "100%",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
      codeTagProps={{
        style: {
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        },
      }}
      className="rounded-lg"
    >
      {text}
    </SyntaxHighlighter>
  );
}
