import { CategoryFormValues } from "@/lib/validators/categoryFormSchema";
import React from "react";
import type { UseFormSetValue } from "react-hook-form";
import CategoryGeneratorPresetButton from "./CategoryGeneratorPresetButton";

export const presetProducts = [
  {
    title: "Bamboo Fiber Toothbrush",
    description:
      "Eco-friendly toothbrush made with a biodegradable bamboo handle and BPA-free soft bristles. Designed as a sustainable alternative to plastic toothbrushes.",
  },
  {
    title: "Reusable Beeswax Food Wrap",
    description:
      "Eco-friendly alternative to plastic food wrap made with organic cotton and natural beeswax. Perfect for wrapping fruits, vegetables, and sandwiches.",
  },
  {
    title: "Compostable Kitchen Garbage Bags",
    description:
      "Plant-based garbage bags designed for organic waste disposal. These bags break down naturally in composting environments and help reduce plastic waste.",
  },
  {
    title: "Organic Cotton Reusable Tote Bag",
    description:
      "Reusable shopping tote made from certified organic cotton. Durable, washable, and designed to replace single-use plastic bags.",
  },
];

interface Props {
  setValue: UseFormSetValue<CategoryFormValues>;
}

export default function CategoryGeneratorInputPresets({ setValue }: Props) {
  return (
    <div>
      <h3 className="text-sm font-medium text-foreground/80 mb-2">
        Try with one of these:
      </h3>
      <div className="flex items-center gap-3 flex-wrap">
        {presetProducts.map((product, index) => (
          <CategoryGeneratorPresetButton
            key={index}
            product={product}
            setValue={setValue}
          />
        ))}
        <CategoryGeneratorPresetButton forClear={true} setValue={setValue} />
      </div>
    </div>
  );
}
