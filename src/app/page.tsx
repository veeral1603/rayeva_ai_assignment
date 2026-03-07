import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex items-center flex-col justify-center gap-6">
        <LinkButton href="/category-generator">
          Module 1 - AI Auto-Category & Tag Genrator
        </LinkButton>

        <LinkButton href="/proposal-generator">
          Module 2 - AI B2B Proposal Generator
        </LinkButton>

        <LinkButton href="/impact-report-generator">
          Module 3 - AI Impact Reporting Generator
        </LinkButton>

        <LinkButton href="/whatsapp-support-bot">
          Module 4 - AI WhatsApp Support Bot
        </LinkButton>
      </div>
    </div>
  );
}
