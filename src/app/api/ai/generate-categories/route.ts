import categoryFormSchema from "@/lib/validators/categoryFormSchema";
import { generateCategoriesAndTags } from "@/modules/ai/ai.service";
import parseSchema from "@/utils/schemaParser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedBody = parseSchema(categoryFormSchema, body);

    const response = await generateCategoriesAndTags(validatedBody);

    return NextResponse.json(
      {
        success: true,
        message: "Category and Tags generated!",
        data: JSON.parse(JSON.stringify(response)),
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: (error as Error).message,
      },
      { status: 500 },
    );
  }
}
