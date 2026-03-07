import categoryFormSchema from "@/lib/validators/categoryFormSchema";
import { generateProductCategoriesAndTags } from "@/modules/ai/ai.service";
import { createLog } from "@/modules/logs/log.service";
import { createProduct } from "@/modules/products/product.service";
import parseSchema from "@/utils/schemaParser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedBody = parseSchema(categoryFormSchema, body);

    const { response, prompt } =
      await generateProductCategoriesAndTags(validatedBody);

    const product = await createProduct(validatedBody, response);

    await createLog(prompt, response, product.id);

    return NextResponse.json(
      {
        success: true,
        message: "Category and Tags generated!",
        data: JSON.parse(JSON.stringify(response)),
      },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
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
