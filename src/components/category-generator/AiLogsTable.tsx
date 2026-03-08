import { AiLogType } from "@/types";
import React from "react";
import { Spinner } from "../ui/spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AiLogRow from "./AiLogRow";

interface Props {
  aiLogs: AiLogType[];
  isLoading?: boolean;
}

export default function AiLogsTable({ aiLogs, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner className="size-7" />
      </div>
    );
  }

  if (!isLoading && aiLogs.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">
          Your ai logs will appear here
        </h3>
      </div>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-30">Time</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Sub-Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {aiLogs.map((log) => {
          return <AiLogRow key={log.id} log={log} />;
        })}
      </TableBody>
      <TableCaption>Click the row to view complete details.</TableCaption>
    </Table>
  );
}
