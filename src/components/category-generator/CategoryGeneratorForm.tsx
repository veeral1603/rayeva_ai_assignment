"use client";
import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "../InputContainer";
import Button from "../Button";
import categoryFormSchema, {
  CategoryFormValues,
} from "@/lib/validators/categoryFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "../ui/spinner";
import { useMutation } from "@tanstack/react-query";
import { generateCategoriesAndTags } from "@/services/categories.service";
import { useCategoryAndTagsStore } from "@/stores/categoryAndTagsStore";
import { categoryAndTagsResponse } from "@/types";
import CategoryGeneratorInputPresets from "./CategoryGeneratorInputPresets";

export default function CategoryGeneratorForm() {
  const [loading, setLoading] = React.useState(false);
  const { setAiData } = useCategoryAndTagsStore();

  const mutation = useMutation({
    mutationFn: (data: CategoryFormValues) => generateCategoriesAndTags(data),
    onSuccess: (data: categoryAndTagsResponse) => {
      setAiData(data);
      form.reset();

      setLoading(false);
    },
    onError: () => {
      setLoading(false);
    },
  });

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
  });

  const onSubmit = (data: CategoryFormValues) => {
    setLoading(true);
    mutation.mutate(data);
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
            className="flex-1 w-full h-32 resize-none"
            {...form.register("description")}
          />
        </InputContainer>

        <Button type="submit">
          {loading && <Spinner className="size-5" />}
          {!loading && <p>Generate</p>}
        </Button>
      </form>

      <div className="mt-6">
        <CategoryGeneratorInputPresets setValue={form.setValue} />
      </div>
    </div>
  );
}
