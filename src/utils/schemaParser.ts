import { ZodType } from "zod";

function parseSchema<T>(schema: ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid data");
  }

  return result.data;
}

export default parseSchema;
