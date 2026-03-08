"use client";
import React from "react";
import HistoryTable from "./ProductsTable";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/services/products.service";

export default function ProductsTab() {
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  return (
    <div className="h-130 w-full ">
      <HistoryTable
        products={products || []}
        isLoading={isLoading || isFetching}
      />
    </div>
  );
}
