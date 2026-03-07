"use client";
import { useCategoryAndTagsStore } from "@/stores/categoryAndTagsStore";
import React from "react";
import JSONOutputContainer from "./JSONOutputContainer";
import Button from "../Button";
import { X } from "lucide-react";

export default function ResultTab() {
  const { clearAiData, aiData } = useCategoryAndTagsStore();

  return (
    <div className="h-130 w-full flex flex-col gap-6">
      <JSONOutputContainer />
      {aiData && (
        <Button className="w-max" onClick={clearAiData}>
          <X size={16} /> <p>Clear Result</p>
        </Button>
      )}
    </div>
  );
}
