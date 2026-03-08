import { ProductType } from "@/types";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import React from "react";
import { Badge } from "../ui/badge";
import DeleteProductButton from "./DeleteProductButton";

interface Props {
  product: ProductType;
}

export default function ProductDialogContent({ product }: Props) {
  return (
    <DialogContent className="sm:max-w-lg md:max-w-xl!">
      <DialogHeader>
        <DialogTitle className="line-clamp-1! truncate!">
          {product.title}
        </DialogTitle>
        <DialogDescription>{product.description}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3">
        <p className="font-semibold font-foreground">
          Category:{" "}
          <span className="font-normal text-muted-foreground">
            {product.primaryCategory}
          </span>
        </p>
        <p className="font-semibold font-foreground">
          Sub-Category:{" "}
          <span className="font-normal text-muted-foreground">
            {product.subCategory}
          </span>
        </p>

        <div className="flex items-start gap-2">
          <p className="font-semibold font-foreground">SEO-Tags: </p>
          <div className="flex items-center gap-2 flex-wrap flex-1 gap-y-3">
            {product.seoTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-muted-foreground bg-muted/50"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <p className="font-semibold font-foreground">
          Sustainability Filters:{" "}
          <span className="font-normal text-muted-foreground">
            {product.sustainabilityFilters.length === 0
              ? "None"
              : product.sustainabilityFilters.join(", ")}
          </span>
        </p>

        <DeleteProductButton productId={product.id as string} large />
      </div>
    </DialogContent>
  );
}
