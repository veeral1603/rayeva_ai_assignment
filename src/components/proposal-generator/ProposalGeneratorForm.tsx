"use client";
import proposalFormSchema, {
  ProposalFormValues,
} from "@/validators/proposalFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { Spinner } from "../ui/spinner";
import InputContainer from "../InputContainer";

export default function ProposalGeneratorForm() {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<ProposalFormValues>({
    defaultValues: {
      eventType: "",
      industry: "",
      location: "",
      budget: 0,
    },
    resolver: zodResolver(proposalFormSchema),
  });

  const onSubmit = (data: ProposalFormValues) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-lg ">
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <InputContainer label="Industry" error={form.formState.errors.industry}>
          <input
            type="text"
            placeholder="Enter your industry"
            {...form.register("industry")}
          />
        </InputContainer>

        <InputContainer
          label="Budget (in INR)"
          error={form.formState.errors.budget}
        >
          <input
            type="number"
            placeholder="Enter your budget (in INR)"
            className="flex-1 w-full"
            {...form.register("budget", { valueAsNumber: true })}
          />
        </InputContainer>

        <InputContainer label="Location" error={form.formState.errors.location}>
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-1 w-full"
            {...form.register("location")}
          />
        </InputContainer>

        <InputContainer
          label="Event Type"
          error={form.formState.errors.eventType}
        >
          <input
            type="text"
            placeholder="Enter your event type"
            className="flex-1 w-full"
            {...form.register("eventType")}
          />
        </InputContainer>

        <Button type="submit">
          {loading && <Spinner className="size-5" />}
          {!loading && <p>Generate</p>}
        </Button>
      </form>

      <div className="mt-6">
        {/* <CategoryGeneratorInputPresets setValue={form.setValue} /> */}
      </div>
    </div>
  );
}
