import { getAllCategoryAndTagLogs } from "@/modules/logs/log.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const logs = await getAllCategoryAndTagLogs();
    return NextResponse.json(
      { success: true, message: "Logs fetched successfully", data: logs },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching logs",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
