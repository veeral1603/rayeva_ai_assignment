import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductType } from "@/types";
import { Spinner } from "../ui/spinner";
import ProductRow from "./ProductRow";

interface Props {
  products: ProductType[];
  isLoading?: boolean;
}

export default function ProductsTable({ products, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner className="size-7" />
      </div>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">
          Your products will appear here
        </h3>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-30">Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return <ProductRow key={product.id} product={product} />;
        })}
      </TableBody>
      <TableCaption>Click the row to view complete details.</TableCaption>
    </Table>
  );
}
