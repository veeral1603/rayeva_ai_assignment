import { CategoryFormValues } from "@/validators/categoryFormSchema";
import { X } from "lucide-react";
import React from "react";
import { UseFormSetValue } from "react-hook-form";

interface Props {
  product?: CategoryFormValues;
  setValue: UseFormSetValue<CategoryFormValues>;
  forClear?: boolean;
}

export default function CategoryGeneratorPresetButton({
  product,
  setValue,
  forClear = false,
}: Props) {
  if (forClear) {
    return (
      <button
        className="px-2 py-2 rounded-md flex items-center gap-2 border-2 border-neutral-900 bg-neutral-800 hover:bg-neutral-900 text-foreground cursor-pointer text-xs transition duration-200"
        onClick={() => {
          setValue("title", "");
          setValue("description", "");
        }}
      >
        <X size={14} /> <span>Clear</span>
      </button>
    );
  }

  return (
    <button
      className="px-2 py-2 rounded-md border-2 flex items-center gap-2  border-neutral-900 bg-neutral-800 hover:bg-neutral-900 text-foreground cursor-pointer text-xs transition duration-200"
      onClick={() => {
        setValue("title", product?.title || "");
        setValue("description", product?.description || "");
      }}
    >
      <span>{product?.title}</span>
    </button>
  );
}
