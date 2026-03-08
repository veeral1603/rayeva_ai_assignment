"use client";
import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/services/products.service";

interface Props {
  productId: string;
  large?: boolean;
}

export default function DeleteProductButton({ productId, large }: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setIsLoading(false);
    },
    onMutate: () => {
      setIsLoading(true);
    },
  });

  if (large) {
    return (
      <Button
        variant="destructive"
        disabled={isLoading}
        className="py-2 "
        onClick={(e) => {
          e.stopPropagation();
          mutation.mutate();
        }}
      >
        <span>Delete Product</span>
        <Trash2 className="text-destructive" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      disabled={isLoading}
      onClick={(e) => {
        e.stopPropagation();
        mutation.mutate();
      }}
    >
      <Trash2 className="text-destructive" />
    </Button>
  );
}
