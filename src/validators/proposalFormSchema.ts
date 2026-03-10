import { z } from "zod";

const proposalFormSchema = z.object({
  industry: z.string().min(1, "Industry is required"),
  budget: z.number().min(1, "Budget must be greater than 0"),
  eventType: z.string().min(1, "Event type is required"),
  location: z.string().min(1, "Location is required"),
});

export type ProposalFormValues = z.infer<typeof proposalFormSchema>;

export default proposalFormSchema;
