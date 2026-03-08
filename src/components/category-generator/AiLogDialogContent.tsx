import { AiLogType } from "@/types";
import React from "react";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import JSONOutputContainer from "./JSONOutputContainer";
import TextHighlighter from "./TextHighlighter";

interface Props {
  log: AiLogType;
}

export default function AiLogDialogContent({ log }: Props) {
  return (
    <DialogContent className="sm:max-w-lg md:max-w-xl! max-h-[80vh] overflow-y-auto custom-scrollbar">
      <DialogHeader>
        <DialogTitle className="line-clamp-1! truncate!">
          AI Log Details
        </DialogTitle>
      </DialogHeader>

      <div className="max-w-full">
        <p className="font-semibold text-foreground">Prompt:</p>
        <TextHighlighter text={log.prompt} />
      </div>
      <div>
        <p className="font-semibold text-foreground">AI Output:</p>
        <JSONOutputContainer jsonData={JSON.parse(log?.response || "{}")} />
      </div>
    </DialogContent>
  );
}
