import React from "react";
import FormError from "./FormError";
import type { FieldError } from "react-hook-form";

interface Props {
  children: React.ReactNode;
  label: string;
  error: FieldError | undefined;
}

export default function InputContainer({ children, label, error }: Props) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label className="block text-sm font-medium  text-foreground/80">
          {label}
        </label>

        {error && <FormError>{error.message}</FormError>}
      </div>
      <div className="border border-neutral-700 flex items-center rounded bg-neutral-800 px-3 py-1.5">
        {children}
      </div>
    </div>
  );
}
