import PageTitle from "@/components/PageTitle";
import ProposalGeneratorForm from "@/components/proposal-generator/ProposalGeneratorForm";
import Link from "next/link";
import React from "react";

export default function ProposalGeneratorPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full divide-x-2 divide-stone-800 relative">
      <div className="h-full w-full p-4 flex items-center mt-8 md:mt-0 md:justify-center flex-col">
        <PageTitle> AI B2B Proposal Generator</PageTitle>
        <ProposalGeneratorForm />
      </div>
      <div className="h-full w-full p-4 flex items-center justify-center">
        {/* <CategoryTabs /> */}
      </div>

      <Link
        href="/"
        className="absolute top-3 left-3 underline underline-offset-2"
      >
        Go Back
      </Link>
    </div>
  );
}
