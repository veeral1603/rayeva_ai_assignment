"use client";
import { ProductType } from "@/types";
import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { formatTimeAgo } from "@/lib/utils";
import DeleteProductButton from "./DeleteProductButton";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ProductDialogContent from "./ProductDialogContent";

interface Props {
  product: ProductType;
}

export default function ProductRow({ product }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TableRow className="cursor-pointer">
          <TableCell className="font-medium truncate w-30">
            {product.title.length > 20
              ? product.title.slice(0, 20) + "..."
              : product.title}
          </TableCell>
          <TableCell>{product.primaryCategory}</TableCell>
          <TableCell>
            {formatTimeAgo(product?.createdAt as Date) ?? "-"}
          </TableCell>
          <TableCell className="text-right">
            <DeleteProductButton productId={product.id as string} />
          </TableCell>
        </TableRow>
      </DialogTrigger>
      <ProductDialogContent product={product} />
    </Dialog>
  );
}
