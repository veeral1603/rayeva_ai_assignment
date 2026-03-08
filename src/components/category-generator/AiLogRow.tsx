import { AiLogType } from "@/types";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import React from "react";
import AiLogDialogContent from "./AiLogDialogContent";
import { formatDateTime } from "@/lib/utils";

interface Props {
  log: AiLogType;
}

export default function AiLogRow({ log }: Props) {
  if (!log.product) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TableRow className="cursor-pointer">
          <TableCell className="font-medium truncate w-30">
            {formatDateTime(log?.createdAt as Date)}
          </TableCell>
          <TableCell>
            {log?.product.title.length > 20
              ? log?.product.title.slice(0, 20) + "..."
              : log?.product.title}
          </TableCell>
          <TableCell>{log.product.primaryCategory}</TableCell>
          <TableCell className="text-right">
            {log.product.subCategory ? log.product.subCategory : "-"}
          </TableCell>
        </TableRow>
      </DialogTrigger>
      <AiLogDialogContent log={log} />
    </Dialog>
  );
}
