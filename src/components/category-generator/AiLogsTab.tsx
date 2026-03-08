"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import AiLogsTable from "./AiLogsTable";
import { AiLogType } from "@/types";
import { getAllCategoryAndTagLogs } from "@/services/logs.service";

export default function AiLogsTab() {
  const {
    data: logs,
    isLoading,
    isFetching,
  } = useQuery<AiLogType[]>({
    queryKey: ["aiLogs", "categoriesAndTags"],
    queryFn: getAllCategoryAndTagLogs,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  return (
    <div className="h-130 w-full ">
      <AiLogsTable aiLogs={logs || []} isLoading={isLoading || isFetching} />
    </div>
  );
}
