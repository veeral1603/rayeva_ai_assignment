import { deleteProduct } from "@/modules/products/product.service";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _Request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Product ID is required." },
        { status: 400 },
      );
    }
    await deleteProduct(id);
    return NextResponse.json(
      { success: true, message: "Product deleted successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete the product.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
