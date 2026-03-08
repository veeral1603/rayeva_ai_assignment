import { z } from "zod";

const categoryFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(200, "Description must be less than 200 characters"),
});

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;

export default categoryFormSchema;
