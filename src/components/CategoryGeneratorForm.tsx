"use client";
import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "./InputContainer";
import Button from "./Button";
import categoryFormSchema, {
  CategoryFormValues,
} from "@/lib/validators/categoryFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CategoryGeneratorForm() {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
  });

  const onSubmit = (data: CategoryFormValues) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-lg ">
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <InputContainer
          label="Product Title"
          error={form.formState.errors.title}
        >
          <input
            type="text"
            placeholder="Enter your product title"
            className="flex-1 w-full"
            {...form.register("title")}
          />
        </InputContainer>

        <InputContainer
          label="Product Description"
          error={form.formState.errors.description}
        >
          <textarea
            placeholder="Enter your product description"
            className="flex-1 w-full h-32"
            {...form.register("description")}
          />
        </InputContainer>

        <Button type="submit">Generate Tags</Button>
      </form>
    </div>
  );
}
