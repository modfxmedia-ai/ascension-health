import type { Metadata } from "next";
import { ConditionStub } from "@/components/ConditionStub";

export const metadata: Metadata = {
  title: "Back Pain | Ascension Health",
  description:
    "Back pain treatment in Fernley, NV. Chronic back pain is one of the biggest problems Americans face today — Ascension Health offers non-surgical relief.",
  alternates: { canonical: "/conditions-treated/back-pain/" },
};

export default function Page() {
  return (
    <ConditionStub
      title="Back Pain"
      slug="back-pain"
      intro="Chronic back pain is one of the biggest problems Americans face today. Back pain actually affects eight out of ten people at some point in their lives. Even though back pain is common, it is not all the same."
    />
  );
}
