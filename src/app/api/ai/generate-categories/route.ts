import { generateCategoriesAndTags } from "@/lib/ai/gemini";
import categoryFormSchema from "@/lib/validators/categoryFormSchema";
import parseSchema from "@/utils/schemaParser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedBody = parseSchema(categoryFormSchema, body);

    // const response = await generateCategoriesAndTags(
    //   validatedBody.title,
    //   validatedBody.description,
    // );

    const response = {
      categories: ["Category 1", "Category 2", "Category 3"],
      tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    };

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
